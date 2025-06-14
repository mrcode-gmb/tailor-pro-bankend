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
        Schema::create('tailoring_tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->nullable()->comment("tailor id")->constrained();
            $table->string("customer_id")->nullable()->comment("customer id if the customer is registered customer on the platform");
            $table->string("measurement_id")->nullable()->comment("measurement id, if the customer is registered or not registered customer on the platform");
            $table->string("task_number")->unique()->comment("Unique tracking number for the order");
            $table->string("garment_type")->comment("Type of clothing (Shirt, Trousers, Gown, etc.)")->nullable();
            $table->string("fabric_type")->comment("Type of fabric provided or requested")->nullable();
            $table->enum("fabric_source", ['customer provided', 'tailor provided'])->default("tailor provided")->comment("Who provided the fabric")->nullable();
            $table->string("design_reference")->comment("Path to a design/image reference")->nullable();
            $table->string("style_description")->comment("Specific style details given by the customer")->nullable();
            $table->enum("task_status", ['pending', 'cutting', 'sewing', 'completed', 'delivered', 'cancelled'])->default("pending")->nullable();
            $table->string("price")->nullable()->comment("task amount customer paid");
            $table->enum("payment_status", ['pending', 'paid', 'failed', 'refunded'])->default("pending")->nullable()->comment("payment status");
            $table->string("delivery_date")->nullable()->comment("task amount customer paid");
            $table->text("special_notes")->nullable()->comment("Additional instructions from the customer");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tailoring_tasks');
    }
};
