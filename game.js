function generateBoard(){
    let board = "";
    for (let y = config.rows[0]; y <= config.rows[config.rows.length-1]; y++) {
        board += "<tr>";
        for (let x = config.cols[0]; x <= config.cols[config.cols.length-1]; config.cols[x]++) {
            board += `<td data-x="${x}" data-y="${y}"></td>`;
        }
        board += "</tr>";
    }
    return `<table><tbody>${board}</tbody></table>`;
};

generateBoard();