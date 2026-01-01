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
        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->string('path');
            $table->string('url', 500)->nullable();
            $table->string('alt_text')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_primary')->default(false);
            $table->timestamps();
        });
        
        // Add partial unique index for ensuring only one primary image per product
        // We use DB::statement because Laravel schema builder doesn't support partial indexes fluently
        try {
            DB::statement('CREATE UNIQUE INDEX idx_product_images_one_primary ON product_images(product_id) WHERE is_primary = true');
        } catch (\Exception $e) {
            // Fallback or ignore if not supported by DB (though Postgres supports it)
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_images');
    }
};
