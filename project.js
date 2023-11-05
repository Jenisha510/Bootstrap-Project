document.addEventListener('DOMContentLoaded', function() {
    var contentForm = document.getElementById('creation');
    const contentContainer = document.getElementById('name');
    const Container = document.getElementById('course');
    const Container1 = document.getElementById('contentchange');
    const Container2 = document.getElementById('bio');
    const Container3= document.getElementById('biodetails');
    const Container4= document.getElementById('skills');
    const Container5= document.getElementById('email');
    const Container6= document.getElementById('number');
    const Container7= document.getElementById('location');
    const Container8= document.getElementById('profilename');

    contentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the new content from the form input
        const newname = document.getElementById('newname').value;
        const newcourse = document.getElementById('newcourse').value;
        const newcontent = document.getElementById('newcontent').value;
        const newbio = document.getElementById('newbio').value;
        const newbiodetails = document.getElementById('newbiodetails').value;
        const newskills = document.getElementById('newskills').value;
        const newemail = document.getElementById('newemail').value;
        const newnumber = document.getElementById('newnumber').value;
        const newlocation = document.getElementById('newlocation').value;
        const newprofilename = document.getElementById('newprofilename').value;
        

        // Update the content in the container
        contentContainer.innerHTML = newname;
        Container.innerHTML = newcourse;
        Container1.innerHTML = newcontent;
        Container2.innerHTML = newbio;
        Container3.innerHTML = newbiodetails;
        Container4.innerHTML = newskills;
        Container5.innerHTML = newemail;
        Container6.innerHTML = newnumber;
        Container7.innerHTML = newlocation;
        Container8.innerHTML = newprofilename;

        // Clear the form input
        document.getElementById('newname').value = '';
        document.getElementById('newcourse').value = '';
        document.getElementById('newcontent').value = '';
        document.getElementById('newbio').value = '';
        document.getElementById('newbiodetails').value = '';
        document.getElementById('newskills').value = '';
        document.getElementById('newemail').value = '';
        document.getElementById('newnumber').value = '';
        document.getElementById('newlocation').value = '';
        document.getElementById('newprofilename').value = '';
    });
  });


