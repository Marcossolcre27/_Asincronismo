const jsdom = require('../../node_modules/@testing-library/jest-dom');




test('Body Test', () => {
    //const all = jsdom.body
    innerHTML = `
    
    <div class="main-container">

        <h1 data-testid=”not empty text”>List with Asynchronsim</h1>

        <form id="form">
            <input type="text" placeholder="inserta un nombre" class="name" required>
            <button class="btn" type="submit">Send</button>
        </form>

        <table class="table-container">
             <thead>
                <tr id="thead">
                    <td id="idtd">ID</td>
                    <td id="nametd">Nombre</td>
                </tr>
             </thead>
            <tbody id="resultados"></tbody>
        </table>

    </div>

    `;

    //const inputForm = screen.getByText('List with Asynchronsim');
  
    //expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
    expect((screen.innerHTML.getByText('List with Asynchronsim')));
   // expect(screen.innerHTML.getByText('List with Asynchronsim')).not.toBeEmptyDOMElement();
});