let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML("afterbegin", result);
    },

    generateBoard() {
        let board = "";
        for (let y = 0; y <= config.rows.length - 1; y++) {
            board += "<tr>";
            for (let x = 0; x <= config.cols.length - 1; x++) {
                board += `<td data-x="${config.cols[x]}" data-y="${config.rows[y]}"></td>`;
            }
            board += "</tr>";
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
    colorBlackCells() {

    }
}