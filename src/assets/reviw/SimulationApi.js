export function SimulationApi() {

const url =""

const fetchApi = async () => {
    try {
        
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    

    } catch (error) {
        console.error(error);
    }
    ;
  };

  fetchApi();


    return (



        <div>
            <h1>SimulationApi</h1>
        </div>
    );
}