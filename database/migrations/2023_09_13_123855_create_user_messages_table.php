<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_messages', function (Blueprint $table) {
            $table->id();
            $table->integer('receiving_id')->unsigned();
<<<<<<< HEAD
	        $table->integer('sending_id')->unsigned();
            $table->integer('is_system_message');
            $table->string('message');
	        $table->timestamps();
=======
	    $table->integer('sending_id')->unsigned();
            $table->integer('is_system_message');
            $table->string('message');
	    $table->timestamps();
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_messages');
    }
};
