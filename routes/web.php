<?php

// use App\Http\Controllers\MailController;

use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Route;
use App\Models\Mail;
use Barryvdh\DomPDF\Facade as PDF;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

// Route::get('/letter/print/{id}', [MailController::class, 'print_pdf']);

Route::get('/letter/print/{id}', function ($id) {
    $letter_resource = Mail::where('id', $id)-> first();
    $bulan = array (
		1 =>   'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	);

    $tgl = explode('-', $letter_resource->tgl_surat);
    $letter_resource->tgl_surat = $tgl[2] . ' ' . $bulan[ (int)$tgl[1] ] . ' ' . $tgl[0];
    $pdf = PDF::loadview('cetak_pdf', compact('letter_resource'));
    return $pdf->stream('surat_izin_pdf');
});

