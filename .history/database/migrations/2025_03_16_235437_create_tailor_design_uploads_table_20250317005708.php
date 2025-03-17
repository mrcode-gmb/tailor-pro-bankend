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
        Schema::create('tailor_design_uploads', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained();
            $table->string("design_name")->comment("Name or title of the design")->nullable();
            $table->string("design_image")->comment("Path/URL of the uploaded design image")->nullable();
            $table->string("category")->comment("Type of clothing (e.g., Shirt, Suit, Gown)")->nullable();
            $table->string("description")
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tailor_design_uploads');
    }
};
