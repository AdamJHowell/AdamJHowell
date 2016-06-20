// This was originally pilfered from some webcomic site.  I wish that I could remember the site, because I would like to give attribution.
// I have formatted it to be significantly more readable, but it still has many variable names that bother me.
// If you are reading this on an 80-character-wide terminal, I appologize for the side scrolling.  To everyone else, you are welcome.


function setActiveStyleSheet(title)
{
	var i, a, main;
	for( i=0; ( a = document.getElementsByTagName( "link" )[i] ); i++ )
	{
		if( a.getAttribute( "rel" ).indexOf( "style" ) != -1 && a.getAttribute( "title" ) )
		{
			a.disabled = true;
			if( a.getAttribute( "title" ) == title )
			{
				a.disabled = false;
			}
		}
	}
}


function getActiveStyleSheet()
{
	var i, a;
	for( i=0; ( a = document.getElementsByTagName( "link" )[i] ); i++ )
	{
		if( a.getAttribute( "rel" ).indexOf( "style" ) != -1 && a.getAttribute( "title" ) && !a.disabled )
		{
			return a.getAttribute( "title" );
		}
	}
	return null;
}


function getPreferredStyleSheet()
{
	var i, a;
	for( i=0; ( a = document.getElementsByTagName( "link" )[i] ); i++ )
	{
		if( a.getAttribute( "rel" ).indexOf( "style" ) != -1 && a.getAttribute( "rel" ).indexOf( "alt" ) == -1 && a.getAttribute( "title" ) )
		{
			return a.getAttribute( "title" );
		}
	}
	return null;
}


function createCookie( name, value, days )
{
	if( days )
	{
		var date = new Date();
		date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
		var expires = "; expires="+date.toGMTString();
	}
	else expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}


function readCookie( name )
{
	var nameEQ = name + "=";
	var ca = document.cookie.split( ';' );
	for( var i=0; i < ca.length; i++ )
	{
		var c = ca[i];
		while( c.charAt(0)==' ' ) c = c.substring( 1, c.length );
		if ( c.indexOf( nameEQ ) == 0 )
		{
			return c.substring( nameEQ.length, c.length );
		}
	}
	return null;
}


// This function reads a cookie onload, and implements the style stored therein.
window.onload = function( e )
{
	var cookie = readCookie( "style" );
	var title = cookie ? cookie : getPreferredStyleSheet();
	setActiveStyleSheet( title );
}


// This function saves the currently used style to a cookie, set to expire in 365 days.
window.onunload = function( e )
{
	var title = getActiveStyleSheet();
	createCookie( "style", title, 365 );
}
