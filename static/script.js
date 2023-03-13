$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date = new Date()
    let display_date= "Date:" + date.toLocaleDateString()
    $(document).ready(function () {
        $("#date").html(display_date)
    })
    




    //  write an event, when Submit button is clicked
    $('#button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                prediction= result.data.predicted_emotion
                emoticon_url = result.data.predicted_emotion_img_url

                $("#sentiment").html(prediction)
                $('#sentiment').css("display", "block");

                $("#emoji").attr('src', emoticon_url);
                $('#emoji').css("display", "block");


               

            },
            
           
            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})