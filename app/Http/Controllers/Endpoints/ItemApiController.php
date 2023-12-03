<?php

namespace App\Http\Controllers\Endpoints;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;
use App\Models\Inventory;
<<<<<<< HEAD
use App\Models\CrateItem;
use Illuminate\Support\Facades\Auth;

class ItemApiController extends Controller
{

    public function getItemsByCategory(Request $request, $category)
    {
        // Define the getEventItems function before calling it
        function getEventItems($eventId)
        {
            // Add return statement to get the query result
            return Item::where(['in_event' => true, 'event_id' => $eventId])->get();
        }

        if ($category === 'Recent') {
            // Get all items sorted by updated_at
            $items = Item::orderBy('updated_at')->get();
        } elseif ($category === 'event') {
            // Get items where 'in_event' is true
            $eventItems = Item::where('in_event', true)->get();

            $eventItemsArray = [];
            foreach ($eventItems as $item) {
                // Call the getEventItems function to get event items for each event_id
                $eventItemsArray[] = getEventItems($item->event_id);
            }

            // Merge the arrays of event items into a single array
            $items = collect($eventItemsArray)->flatten();
        } else {
            // Get items with a specific item_type sorted by updated_at
            $items = Item::where('item_type', $category)->orderBy('updated_at')->get();
        }

        foreach ($items as $item) {
            $item->creator = $item->creator;
        }
        return response()->json($items);
    }

    public function getCrate(Request $request)
    {
        $crate = Item::where([
            ['id', '=', $request->id],
            ['type', '=', 'crate']
=======

class ItemApiController extends Controller
{
    public function getItemsByCategory(Request $request, $category)
{
    // Define the getEventItems function before calling it
    function getEventItems($eventId)
    {
        // Add return statement to get the query result
        return Item::where(['in_event' => true, 'event_id' => $eventId])->get();
    }

    if ($category === 'Recent') {
        // Get all items sorted by updated_at
        $items = Item::orderBy('updated_at')->get();
    } elseif ($category === 'event') {
        // Get items where 'in_event' is true
        $eventItems = Item::where('in_event', true)->get();

        $eventItemsArray = [];
        foreach ($eventItems as $item) {
            // Call the getEventItems function to get event items for each event_id
            $eventItemsArray[] = getEventItems($item->event_id);
        }

        // Merge the arrays of event items into a single array
        $items = collect($eventItemsArray)->flatten();
    } else {
        // Get items with a specific item_type sorted by updated_at
        $items = Item::where('item_type', $category)->orderBy('updated_at')->get();
    }
	
    foreach ($items as $item) {
	$item->creator = $item->creator;
    }
    return response()->json($items);
}

public function getCrate(Request $request)
    {
        $crate = Item::where([
            ['id', '=', $request->id],
            ['type', '=', 'crates']
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        ]);

        if (!$crate->exists())
            return response()->json(['error' => 'This crate does not exist.']);

        if (!Auth::user()->ownsItem($request->id))
            return response()->json(['error' => 'You do not own this crate.']);

        $crate = $crate->first();
        $crateItems = $crate->CrateItems();

        if (empty($crateItems))
            return response()->json(['error' => 'This crate is empty so your crate has been preserved. We apologize.']);

        $winningItemId = CrateItem::getWinningItem($crate->id);
        $winningItem = CrateItem::where('id', '=', $winningItemId)->first();

        Inventory::where([
            ['user_id', '=', Auth::user()->id],
            ['item_id', '=', $crate->id]
        ])->first()->delete();

        $inventory = new Inventory;
        $inventory->user_id = Auth::user()->id;
        $inventory->item_id = $winningItem->item->id;
        $inventory->save();

        $images = [];

        foreach ($crateItems as $crateItem)
            $images[$crateItem['id']] = [
<<<<<<< HEAD
                'id'      => (int) $crateItem['id'],
                'src'     => (string) $crateItem['thumbnail'],
                'color'   => (string) crateRarity('color', $crateItem['rarity']),
=======
                'id'      => (integer) $crateItem['id'],
                'src'     => (string) $crateItem['thumbnail'],
                'color'   => (string) crateRarity('color', $crateItem['rarity']),
                'padding' => (string) itemTypePadding($crateItem['type'])
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
            ];

        for ($i = 0; $i < 50; $i++) {
            $itemImages = [];
            $id = rand();

            shuffle($crateItems);

            foreach ($crateItems as $crateItem)
                $itemImages[$id] = [
<<<<<<< HEAD
                    'id'      => (int) $id,
                    'src'     => (string) $crateItem['thumbnail'],
                    'color'   => (string) crateRarity('color', $crateItem['rarity']),
=======
                    'id'      => (integer) $id,
                    'src'     => (string) $crateItem['thumbnail'],
                    'color'   => (string) crateRarity('color', $crateItem['rarity']),
                    'padding' => (string) itemTypePadding($crateItem['type'])
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                ];

            shuffle($itemImages);

            $images[$id] = $itemImages[0];
        }

        shuffle($images);

        $winningIndex = floor(count($images) * 0.5) + 1;
        $images[$winningIndex] = [
<<<<<<< HEAD
            'id'      => (int) $winningItem->id,
            'src'     => (string) $winningItem->item->thumbnail(),
            'color'   => (string) crateRarity('color', $winningItem->rarity),
=======
            'id'      => (integer) $winningItem->id,
            'src'     => (string) $winningItem->item->thumbnail(),
            'color'   => (string) crateRarity('color', $winningItem->rarity),
            'padding' => (string) itemTypePadding($winningItem->item->type)
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        ];

        $animateLeft = ($winningIndex - 2) * 153.3;

        return response()->json([
<<<<<<< HEAD
            'id'              => (int) $winningItem->id,
            'name'            => (string) $winningItem->item->name,
            'thumbnail'       => (string) $winningItem->item->thumbnail(),
            'url'             => (string) route('store.item', [$winningItem->item->id, $winningItem->item->slug()]),
=======
            'id'              => (integer) $winningItem->id,
            'name'            => (string) $winningItem->item->name,
            'thumbnail'       => (string) $winningItem->item->thumbnail(),
            'url'             => (string) route('catalog.item', [$winningItem->item->id, $winningItem->item->slug()]),
            'padding'         => (string) itemTypePadding($winningItem->item->type),
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
            'unboxing_images' => (array) $images,
            'animate_left'    => (string) "-={$animateLeft}px",
            'rarity' => [
                'name' => CrateItem::rarityName($winningItem->rarity),
                'color' => CrateItem::rarityColor($winningItem->rarity)
            ]
        ]);
    }
}
