$(document).ready(function() {
    $("#reach").click(function() {
        $("#map").slideUp(2000).slideDown(2000);
    })

    var flag = true;
    $("#log").mouseenter(function() {
        if (flag) {
            $("#log").hide(1000).show(1000);
            flag = false;
        }
    })

    $("#log").click(function() {
        $("#log").html("Welcome To WeCare");
    })

    $("#log").dblclick(function() {
        $("#log").html("WeCare");
    })



    $("#card1").mouseenter(function() {
        $("#card1").css({
                "background-color": "beige",
                "box-shadow": "10px 10px 10px lightblue"
            }

        )
    })

    $("#card1").mouseleave(function() {
        $("#card1").css({
                "background-color": "white",
                "box-shadow": "10px 10px 10px pink"
            }

        )
    })


    $("#card2").mouseenter(function() {
        $("#card2").css({
                "background-color": "beige",
                "box-shadow": "10px 10px 10px lightblue"
            }

        )
    })

    $("#card2").mouseleave(function() {
        $("#card2").css({
                "background-color": "white",
                "box-shadow": "10px 10px 10px pink"
            }

        )
    })


    $("#card3").mouseenter(function() {
        $("#card3").css({
                "background-color": "beige",
                "box-shadow": "10px 10px 10px lightblue"
            }

        )
    })

    $("#card3").mouseleave(function() {
        $("#card3").css({
                "background-color": "white",
                "box-shadow": "10px 10px 10px pink"
            }

        )
    })

    $(".jumbo1").mouseenter(function() {
        $(".text1").css({
            "box-shadow": "10px 10px 10px plum"

        })
    })

    $(".jumbo1").mouseleave(function() {
        $(".text1").css({
            "box-shadow": "10px 10px 10px lightpink"

        })
    })

})



function scaleUp(obj, size) {
    obj.style.fontSize = size;
}
setInterval(scaleUp, 50);


function validate() {
    var email = document.getElementById("text1").value;
    var regx = /^([a-zA-z0-9\.-]+)@([a-z0-9\-]+).([a-z]{2,10})$/;


    if (regx.test(email)) {
        alert("You will be reached by our team");
        return true;
    } else {
        alert("Please enter a valid email");
        return false;

    }

}


function fn5() {

    const counters = document.querySelectorAll('.counter');
    const speed = 100; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

setTimeout(fn5, 1000);