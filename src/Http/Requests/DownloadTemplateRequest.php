<?php

namespace ACTCMS\DataSynchronize\Http\Requests;

use ACTCMS\Support\Http\Requests\Request;

class DownloadTemplateRequest extends Request
{
    public function rules(): array
    {
        return [
            'format' => ['required', 'string', 'in:csv,xlsx'],
        ];
    }
}
