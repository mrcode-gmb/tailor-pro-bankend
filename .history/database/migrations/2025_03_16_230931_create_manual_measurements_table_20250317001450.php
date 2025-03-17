<?php

use App\Models\User;
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
        Schema::create('manual_measurements', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->comment("customer id for each customer")->constrained();
            $table->enum("measurement_type", ['ai', 'manual'])->default('manual');
            $table->text("special_notes")->comment("description about the measurement");
            $table->string("ai_confidence")->comment("Confidence level of AI measurement (%)")->nullable();
            $table->string("image_reference")->nullable()->comment("")
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('manual_measurements');
    }
};
