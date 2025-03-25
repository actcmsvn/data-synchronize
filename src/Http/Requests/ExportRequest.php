<?php

namespace ACTCMS\DataSynchronize\Http\Requests;

use ACTCMS\Support\Http\Requests\Request;

class ExportRequest extends Request
{
    public function rules(): array
    {
        return [
            'format' => ['required', 'string', 'in:csv,xlsx'],
            'columns' => ['nullable', 'array'],
            'columns.*' => ['required', 'string'],
        ];
    }
}
