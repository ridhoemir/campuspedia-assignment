<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    use HasFactory;

    protected $table = 'mail';
    protected $fillable = [
        'jabatan_penerima',
        'alamat_perusahaan',
        'nama_lengkap_pengirim',
        'alamat_pengirim',
        'jabatan',
        'alasan_izin',
        'lama_izin',
        'tgl_surat'
    ];
}
