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
        Schema::create('not_registered_user_measurements', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('mobile_number')->unique();
            $table->enum("gender", ['male', 'female', 'other']);
            $table->enum("measurement_type", ['ai', 'manual'])->default('manual');
            // remain some colums i want ask tailors about what they need in measument the body
            $table->string("ai_confidence")->comment("Confidence level of AI measurement (%)")->nullable();
            $table->string("image_reference")->nullable()->comment("Path to the image used by AI for measurement");
            $table->text("special_notes")->comment("description about the measurement");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('not_registered_user_measurements');
    }
};
