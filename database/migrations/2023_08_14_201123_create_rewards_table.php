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
<<<<<<< HEAD
        Schema::create('rewards', function (Blueprint $table) {
            $table->id();
            $table->string('type')->default('bucks');
            $table->integer('granted_amount')->default('1');
            $table->integer('item_id');
            $table->unsignedBigInteger('level_required');
            $table->boolean('membership_required')->default(false);
            // You can add more columns for additional reward attributes

=======
       Schema::create('rewards', function (Blueprint $table) {
            $table->id();
            $table->string('type')->default('bucks');
	    $table->integer('granted_amount')->default('1');
	    $table->integer('item_id');
            $table->unsignedBigInteger('level_required');
	    $table->boolean('membership_required')->default(false);
            // You can add more columns for additional reward attributes
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rewards');
    }
};
