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
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('resource_type', 50)->nullable();
            $table->string('file_path')->nullable();
            $table->string('file_url', 500)->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('specialty', 100)->nullable();
            $table->integer('publish_year')->nullable();
            $table->integer('download_count')->default(0);
            $table->boolean('is_public')->default(true);
            $table->timestamps();

            $table->index('resource_type');
            $table->index('specialty');
            $table->index('publish_year');
            $table->index('is_public');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};
