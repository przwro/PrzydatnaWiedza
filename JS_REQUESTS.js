1. sposób

var url = 'api/Data/GetDistanceMatrix?' + new URLSearchParams({from: "lala", to: "gogo" });
                  
fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
            }
        })
		
'api/Data/GetDistanceMatrix?' + new URLSearchParams({from: "lala", to: "gogo"}); = "api/Data/GetDistanceMatrix?from=lala&to=gogo"
            
 2. sposób       

$.ajax({
	cache: false,
	url: 'api' + '/Data/GetDistanceMatrix',
	type: 'GET',
	data: { from: "lala", to: "gogo" },
	contentType: 'application/json; charset=utf-8',
	dataType: 'json',
	success: function (result) {
		if (result) {
			console.log('Zapisano kilometrówkę.');
		}
		else {
			console.log('Błąd zapisu kilometrówki.');
		}
	}
});

Oba obsługują wywołanie akcji 
public bool GetDistanceMatrix(string from, string to)
{
	return true;
}		