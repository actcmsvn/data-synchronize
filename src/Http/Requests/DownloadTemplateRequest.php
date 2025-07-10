<?php

namespace Actcmsvn\DataSynchronize\Http\Requests;

use Actcmsvn\Support\Http\Requests\Request;

class DownloadTemplateRequest extends Request
{
    public function rules(): array
    {
        return [
            'format' => ['required', 'string', 'in:csv,xlsx'],
        ];
    }
}
