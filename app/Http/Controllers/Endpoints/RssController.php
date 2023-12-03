<?php

namespace App\Http\Controllers\Endpoints;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;

class RssController extends Controller
{
    public function index()
    {
        $url = config('app.ghost_blog_url') . '/rss/';
        $response = Http::get($url);

        if ($response->successful()) {
            $xml = $response->body();
            $xml = str_replace('<content:encoded>', '<content_encoded>', $xml);
            $xml = str_replace('</content:encoded>', '</content_encoded>', $xml);

            $obj = simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA);

            $feed = [];

            $rgx = '~src="([^"]*)"~is';

            foreach ($obj->channel->item as $item) {
                $node['title'] = (string) $item->title;
                $node['desc'] = (string) $item->description;
                $node['link'] = (string) $item->link;
                $timestamp = strtotime($item->pubDate);
                $formattedDate = date("d M, Y", $timestamp);
                $node['date'] = (string) $formattedDate;

<<<<<<< HEAD
                // Extract the creator's name if available
                $creatorElement = $item->xpath('//dc:creator'); // Assuming dc:creator is the XML element for the creator's name
                $node['creator'] = isset($creatorElement[0]) ? (string) $creatorElement[0] : '';

                $content = $item->content_encoded;
                preg_match($rgx, $content, $match);
                $node['image'] = isset($match[1]) ? $match[1] : '';

                // Append the $node to the $feed array
                $feed[] = $node;
            }

            return response()->json($feed);
=======
                $content = $item->content_encoded;
                preg_match($rgx, $content, $match);
                $node['image'] = isset($match[1]) ? $match[1] : '';
                $feed = $node;
            }

        return response()->json($feed);
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        } else {
            return response()->json(['error' => 'Failed to retrieve RSS feed.']);
        }
    }
}
