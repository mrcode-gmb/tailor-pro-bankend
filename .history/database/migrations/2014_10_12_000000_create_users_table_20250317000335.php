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
            $table->string('name');
            $table->string('email')->unique();
            $table->string('mobile_number')->unique();
            $table->enum("gender", ['male', 'female', 'other']);
            $table->string("dob")->nullable()->comment("date of birth");profile_photo
            $table->string("dob")->nullable()->comment("date of birth");profile_photo
            $table->text("state")->nullable()->comment("state for tailors and customers");
            $table->text("address")->nullable()->comment("address/location for tailors and customers");
            $table->enum('role', ['admin', 'tailor', 'admin', 'customer'])->default('user');
            $table->timestamp('email_verified_at')->nullable();
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
