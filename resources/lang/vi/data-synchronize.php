<?php

return [
    'tools' => [
        'export_import_data' => 'Xuất/Nhập dữ liệu',
    ],

    'import' => [
        'name' => 'Nhập',
        'heading' => 'Nhập :label',
        'failed_to_read_file' => 'Tệp không hợp lệ, bị hỏng hoặc quá lớn để đọc.',

        'form' => [
            'quick_export_message' => 'Nếu bạn muốn xuất dữ liệu :label, bạn có thể thực hiện nhanh bằng cách nhấp vào :export_csv_link hoặc :export_excel_link.',
            'quick_export_button' => 'Xuất ra :format',
            'dropzone_message' => 'Kéo và thả tệp tại đây hoặc nhấp để tải lên',
            'allowed_extensions' => 'Chọn tệp với các phần mở rộng sau: :extensions.',
            'import_button' => 'Nhập',
            'chunk_size' => 'Kích thước khối',
            'chunk_size_helper' => 'Số lượng dòng được nhập mỗi lần được xác định bởi kích thước khối. Tăng giá trị này nếu bạn có tệp lớn và dữ liệu được nhập nhanh. Giảm giá trị này nếu gặp giới hạn bộ nhớ hoặc lỗi timeout khi nhập dữ liệu.',
        ],

        'failures' => [
            'title' => 'Lỗi nhập',
            'attribute' => 'Thuộc tính',
            'errors' => 'Lỗi',
        ],

        'example' => [
            'title' => 'Ví dụ',
            'download' => 'Tải tệp ví dụ :type',
        ],

        'rules' => [
            'title' => 'Quy tắc',
            'column' => 'Cột',
        ],

        'uploading_message' => 'Đang bắt đầu tải tệp lên...',
        'uploaded_message' => 'Tệp :file đã được tải lên thành công. Bắt đầu kiểm tra dữ liệu...',
        'validating_message' => 'Đang kiểm tra từ :from đến :to...',
        'importing_message' => 'Đang nhập từ :from đến :to...',
        'done_message' => 'Đã nhập thành công :count :label.',
        'validating_failed_message' => 'Kiểm tra thất bại. Vui lòng xem lỗi bên dưới.',
        'no_data_message' => 'Dữ liệu của bạn đã được cập nhật hoặc không có dữ liệu để nhập.',
    ],

    'export' => [
        'name' => 'Xuất',
        'heading' => 'Xuất :label',
        'excel_not_supported_for_large_exports' => 'Định dạng Excel không hỗ trợ cho xuất dữ liệu lớn (:count mục). Vui lòng sử dụng định dạng CSV để có hiệu suất và độ ổn định tốt hơn.',

        'form' => [
            'all_columns_disabled' => 'Các cột sau sẽ được xuất: :columns.',
            'columns' => 'Các cột',
            'format' => 'Định dạng',
            'export_button' => 'Xuất',
        ],

        'success_message' => 'Xuất dữ liệu thành công.',
        'error_message' => 'Xuất dữ liệu thất bại.',

        'empty_state' => [
            'title' => 'Không có dữ liệu để xuất',
            'description' => 'Có vẻ như không có dữ liệu nào để xuất.',
            'back' => 'Quay lại :page',
        ],
    ],
    'check_all' => 'Chọn tất cả',
];
