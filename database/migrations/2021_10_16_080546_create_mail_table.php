<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mail', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('jabatan_penerima');
            $table->string('alamat_perusahaan');
            $table->string('nama_lengkap_pengirim');
            $table->string('alamat_pengirim');
            $table->string('jabatan');
            $table->string('alasan_izin');
            $table->string('lama_izin');
            $table->date('tgl_surat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mail');
    }
}
