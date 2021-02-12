<!--//--><![CDATA[//><!--
							 var dayNames = new Array( );
               dayNames[0] = "Sunday";
               dayNames[1] = "Monday";
               dayNames[2] = "Tuesday";
               dayNames[3] = "Wednesday";
               dayNames[4] = "Thursday";
               dayNames[5] = "Friday";
               dayNames[6] = "Saturday";

							 var monthNames = new Array( );             
               monthNames[0] = "January";
               monthNames[1] = "February";
               monthNames[2] = "March";
               monthNames[3] = "April";
               monthNames[4] = "May";
               monthNames[5] = "June";
               monthNames[6] = "July";
               monthNames[7] = "August";
               monthNames[8] = "September";
               monthNames[9] = "October";
               monthNames[10] = "November";
               monthNames[11] = "December";

               var now = new Date( );
               var day = now.getDay( );
               var month = now.getMonth( );
               var year = now.getFullYear( );
               var date = now.getDate( );

               var hour = now.getHours( );
               var minute = now.getMinutes( );
               var second = now.getSeconds( );

               document.write("<p>" + dayNames[day] + " " + date  + " ");
               document.write(monthNames[month]  + " " + year + " ")+"</p>";
             
               //--><!]]>