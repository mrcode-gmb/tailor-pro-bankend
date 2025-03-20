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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('mobile_number')->unique()->nullable();
            $table->enum("gender", ['male', 'female', 'other'])->default("male")->nullable();
            $table->string("dob")->nullable()->comment("date of birth");
            $table->text("state")->nullable()->comment("state for tailors and customers");
            $table->text("address")->nullable()->comment("address/location for tailors and customers");
            $table->string("profile_photo")->nullable()->comment("profile photo to customer and tailors to verify they both");
            $table->enum('role', ['admin', 'tailor', 'customer'])->default('customer');
            $table->timestamp('email_verified_at')->nullable();
            $table->enum('status', ['active', 'inactive', 'banned', ])->default('active');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
