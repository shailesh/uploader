$(document).ready(function() {
    $(form)
        .formValidation({
            ... options ...
        })
        .on('success.form.fv', function(e) {
            e.preventDefault();

            var $form    = $(e.target),
                formData = new FormData(),
                params   = $form.serializeArray(),
                files    = $form.find('[name="images"]')[0].files;

            $.each(files, function(i, file) {
                formData.append('images-' + i, file);
            });

            $.each(params, function(i, val) {
                formData.append(val.name, val.value);
            });

            $.ajax({
                url: $form.attr('action'),
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function(result) {
                    // Process the result ...
                }
            });
        });
});