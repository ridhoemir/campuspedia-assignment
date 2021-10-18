<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Barryvdh\DomPDF\Facade as PDF;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all_letter = Mail::all();
        return response()->json([
            'error' => false,
            'message' => 'success',
            'data'=> $all_letter
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        $validate = Validator::make($request->all(), [
            'jabatan_penerima' => 'required',
            'alamat_perusahaan' => 'required',
            'nama_lengkap_pengirim' => 'required',
            'alamat_pengirim' => 'required',
            'jabatan' => 'required',
            'alasan_izin' => 'required',
            'lama_izin' => 'required',
            'tgl_surat' => 'required|date'
        ]);
        if($validate->fails()) {
            return response()->json([
                'error' => true,
                'message' => $validate->errors()
            ]);
        };

        $letter = Mail::create($request->all());
        if($letter) {
            return response()->json([
                'success' => true,
                'message' => 'Surat berhasil disimpan'
            ]);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Mail::where('id', $id)->first();
        return response()->json([
            'error' => false,
            'message' => 'success',
            'data'=> $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Mail::where('id', $id)->delete();
        return response()->json([
            'success' => true,
            'message' => 'Surat berhasil dihapus'
        ]);
    }

    public function print_pdf($id)
    {
        $letter_resource = Mail::where('id', $id)-> first();
        $pdf = PDF::loadview('cetak_pdf', compact('letter_resource'));
        return $pdf->download('surat_izin_pdf');
    }
}
