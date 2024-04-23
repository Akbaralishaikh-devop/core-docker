

function CreateLocationXLSSHEETData(Obj)
{
	//alert("Insert");
	window.location.href="http://localhost:9082/LocationController/excel/export2";
}



 
        function importExcelFile() {
            var fileInput = document.getElementById('fileInput');
            var formData = new FormData();
            formData.append('LocationData', fileInput.files[0]);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:9082/LocationController/importExcel', true);
          
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        alert("Excel file imported successfully.");
                        window.location.href="http://localhost:9082/LocationList";
                    } else {
                        alert("File cannot be left blank!!");
                    }
                }
            };
            xhr.send(formData);
        }
   
   
   //
   
   
        function DashboardimportExcelFile() {
            var fileInput = document.getElementById('fileInput');
            var formData = new FormData();
            formData.append('file', fileInput.files[0]);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:9082/RealTimeDataValues/importExcel', true);
          
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        alert("Excel file imported successfully.");
                        window.location.href="http://localhost:9082/LocationList";
                    } else {
                        alert("File cannot be left blank!!");
                    }
                }
            };
            xhr.send(formData);
        }
   
   
function loadCreate(Obj)
{
	window.location.href="http://localhost:9082/LocationMaster";
}


function editData(Obj)
{
	//alert("Edit");
	var id = Obj.parentNode.parentNode.childNodes[0].innerHTML;
	var postData= {
						    "LocationId" : id
			   	  }
			   	 window.location.href = "http://localhost:9082/LocationController/EditLocation?id=" + id; 
	
	
}  

function DeleteData(Obj)
{
	
	if (confirm("Are You Sure You want to Delete?") == true) {
  				//alert(Obj.parentNode.parentNode.childNodes[0].innerHTML);
			var _id = Obj.parentNode.parentNode.childNodes[0].innerHTML;

	
					var postData= {
						    "LocationId" : _id
			   			}
			   			//alert(postData);
			   			
			   			$.ajax({
				        url: "http://localhost:9082/LocationController/lPostDeleteLocationData",
			    		type: "POST",
			    		contentType : 'application/json; charset=utf-8',
			       		dataType : 'json',
			    		data: JSON.stringify(postData),
				        success: function(resultB) {
							alert("Deleted Sucessfully !!");
				        	window.location.reload();
				          
				        },
				        error: function(jqXHR, textStatus, errorThrown){
				        	alert(errorThrown);
				            alert(jqXHR.status + ' ' + jqXHR.responseText);
				        }
				   })
	
		} else {
  			 //cancel
			}
}


 function InvokeLocatopn(Obj){
	
	var _varname = window.sessionStorage.getItem('sessionname');
	//alert(_varname);
	document.getElementById("SpnSession").innerHTML = _varname;

	
		$.ajax({
			        type: 'GET',
			        url:  'http://localhost:9082/LocationController/GetLocationListData',     
			        dataType: 'json',
			        async: true,
			        success: function(result) {
				     // alert(result[0]);
			         // console.log(result[0]);
			         
			         // New record
    $('a.editor-create').on('click', function (e) {
        e.preventDefault();
 
        editor.create( {
            title: 'Create new record',
            buttons: 'Add'
        } );
    } );
 
    // Edit record
    $('#LocationGridData_dt').on('click', 'td.editor-edit', function (e) {
        e.preventDefault();
 
        editor.edit( $(this).closest('tr'), {
            title: 'Edit record',
            buttons: 'Update'
        } );
    } );
 
    // Delete a record
    $('#LocationGridData_dt').on('click', 'td.editor-delete', function (e) {
        e.preventDefault();
 
        editor.remove( $(this).closest('tr'), {
            title: 'Delete record',
            message: 'Are you sure you wish to remove this record?',
            buttons: 'Delete'
        } );
    } );
			        
			          $('#LocationGridData_dt').DataTable({
				        data: result,				        
				        columns: [		
						    { data: 'LocationId' },
				            { data: 'LocationName' },
				            { data: 'CreatedDate'},
				            { data: 'CreatedBy' },
				            { data: 'UpdatedDate' },
				            { data: 'UpdatedBy' },
				            { data: 'IsActive' },
				            {
                			data: null,
			                className: "dt-center editor-edit",
			                defaultContent: '<a type="button" class="btn btn-primary"  data-toggle="modal" data-target="#editMemberModal"  onclick="editData(this)"> <span class="glyphicon glyphicon-edit"></span>Edit</a>',
			                orderable: false
            				},
				            {
				                data: null,
				                className: "dt-center editor-delete",
				                defaultContent: '<a type="button" class="btn btn-primary"  data-toggle="modal" data-target="#DeleteMemberModal"  onclick="DeleteData(this)"> <span class="glyphicon glyphicon-edit"></span>Delete</a>',
			                	orderable: false
				            }
				            
				        ],
				    });
			        	
			        },
			        error: function(jqXHR, textStatus, errorThrown){
			        	alert(errorThrown);
			            alert(jqXHR.status + ' ' + jqXHR.responseText);
			        }
			   });
			   


}

