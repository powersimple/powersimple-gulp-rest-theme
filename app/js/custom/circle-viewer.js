
    var photoCount = 6;
    var pieceCount = 6;
    var onPhoto = 0;
    var pieceCompleteCount = 0;
    var delay;

    var transitions = ['center', 'random']
    var transitionType = 0;
    var images = []
    var viewerDest = null
    console.log("circleviwer loaded")
    function circleViewer(dest,images) {
        console.log("CIRCLE VIEWER PRELOAD",dest,images)
        images = images
        viewerDest = dest
        for (var i = 0; i < images.length; i++) {
            jQuery('#preload').append('<img src="'+images[i].src+'">')
        };
        loadCircleViewer(dest,images);
       
    }

    function loadCircleViewer(dest,images) {
        jQuery(dest+'-container').html('');
        for ( var i = 0; i < images.length; i++) {
            var newWidth = (((100 - (100 / pieceCount) * i)) / 100) * 100; //((pieceWidth - ((pieceWidth / pieceCount) * i)) / pieceWidth) * 100;
            var newBackgroundSize = 100 + (100 - newWidth) / newWidth * 100; //100 + (100 - newWidth);
            var newTop = ((100 / pieceCount) * i) / 2;

            jQuery(dest+'-container').append('<div class="section" id="piece' + i + '" style="top: ' + newTop + '%; left: ' + newTop + '%; width: ' + newWidth + '%; height: ' + newWidth + '%; background-size:' + newBackgroundSize + '%; background-image: url('+images[i].src+')"></div>')
        };
        nextSlide(images);
    }

    function nextSlide(images) {
        clearInterval(delay);
        pieceCompleteCount = 0;
        ++onPhoto;
        if (onPhoto >= photoCount) {
            onPhoto = 0;
        }
        console.log("next",images)
        for (var i = 0; i < images.length; i++) {
            var spinDelay = 0;
            var spin = 360;
            var piece = jQuery('#piece' + i);
            var image = images[i]
            switch (transitions[transitionType]) {
                case 'random':
                    spinDelay = Math.random() / 2;
                    spin = Math.random() * 360;
                    break;
                case 'center':
                    spinDelay = (pieceCount - i) / 10;
                    spin = 181;
                    break;
            }

            TweenMax.to(piece, 1, {
                delay: spinDelay,
                directionalRotation: spin + '_long',
                onComplete: completeRotation,
                onCompleteParams: [piece,image],
                ease: Power4.easeIn
            })
        }
    }

    function completeRotation(piece,image) {
        console.log("piece",piece)
        piece.css('background-image', 'url('+image.src+')');
        TweenMax.to(piece, 2, {
            directionalRotation: '0_short',
            onComplete: finishPieceanimation,
            ease: Elastic.easeOut
        })
    }

    function finishPieceanimation() {
        ++pieceCompleteCount;
        if (pieceCompleteCount == pieceCount) {
            delay = setInterval(nextSlide, 1000);
        }
    }
