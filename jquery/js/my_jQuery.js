console.log( $( ".tabs-container .tabs" ) );

$( ".tabs-container .tabs" ).click(function() {
    let tab = $( ".tabs-container .tabs .active" );
    tab.removeClass( "active" );
    $( event.target ).addClass( "active" );

    let tabPaneNameOld = tab.attr( 'href' );
    let tabPaneNameNew = $( event.target ).attr( 'href' );

    console.log( tabPaneNameOld );
    console.log( tabPaneNameNew );
    console.log( "" );

    $( tabPaneNameOld ).removeClass( "active" );
    $( tabPaneNameNew ).addClass( "active" );

});
