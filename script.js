function display_file_input() {

    document.getElementById("switch_file_btn").classList.add('active_btn');
    document.getElementById("from_url").classList.add('d-none');
    document.getElementById("upload_img").classList.remove('d-none');
    document.getElementById("switch_url_btn").classList.remove('active_btn');
}
function display_url_input() {

    document.getElementById("switch_url_btn").classList.add('active_btn');
    document.getElementById("from_url").classList.remove('d-none');
    document.getElementById("upload_img").classList.add('d-none');
    document.getElementById("switch_file_btn").classList.remove('active_btn');
}


deepai.setApiKey('0ebcdfdc-3819-4f7c-82b1-0fa08ff89d4a');
async function show_from_url(tool) {

    var img = document.getElementById("img-url").value;
    if (img) {
        document.getElementById("btn_url_process").setAttribute("disabled", "true");
        var resp = await deepai.callStandardApi(tool, {
            image: img,
        });
        document.getElementById("output_div").classList.remove('d-none');
        document.getElementById("output").src = resp.output_url;
        document.getElementById("dwm-link").href = resp.output_url;
        document.getElementById("btn_url_process").removeAttribute("disabled");
    }

}

async function show_from_inputfile(tool) {

    var img = document.getElementById("input-img");
    if (img.files.length > 0) {
        document.getElementById("btn_input_process").setAttribute("disabled", "true");
        var resp = await deepai.callStandardApi(tool, {
            image: img,
        });
        document.getElementById("output_div").classList.remove('d-none');
        document.getElementById("output").src = resp.output_url;
        document.getElementById("dwm-link").href = resp.output_url;
        document.getElementById("btn_input_process").removeAttribute("disabled");
    }
}

function display_text_input() {
    document.getElementById("switch_text_btn").classList.add('active_btn');
    document.getElementById("from_text").classList.remove('d-none');

}


async function show_from_text(tool) {

    var img_text = document.getElementById("img-text").value;
    if (img_text) {
        document.getElementById("btn_text_process").setAttribute("disabled", "true");
        var resp = await deepai.callStandardApi(tool, {
            text: img_text,
        });
        document.getElementById("output_div").classList.remove('d-none');
        document.getElementById("output").src = resp.output_url;
        document.getElementById("dwm-link").href = resp.output_url;
        document.getElementById("btn_text_process").removeAttribute("disabled");
    }

}
