<?php

use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registered_user_measurements', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->comment("customer id for each customer")->constrained();
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
        Schema::dropIfExists('registered_user_measurements');
    }
};
