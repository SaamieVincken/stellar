let keplerData = [];

export async function streamParseCSV(url) {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? decoder.decode(chunk, { stream: true }) : '';

    const lines = chunk.split('\n');
    const headers = lines[0].split(',');

    for (let line of lines.slice(1)) {
        if (line) {
            const row = line.split(',');
            if (row.length === headers.length) {
                let rowData = {};
                headers.forEach((header, index) => {
                    rowData[header.trim()] = row[index].trim();
                });
            }
        }
        if (readerDone) break;
        let { value: nextChunk, done: newReaderDone } = await reader.read();
        chunk += nextChunk ? decoder.decode(nextChunk, { stream: true }) : '';
        readerDone = newReaderDone;
    }

}


export function findClosestMatch(star, keplerData) {
    let closestMatch = null;
    let smallestDifference = Infinity;
    if(keplerData !== null && keplerData !== undefined) {
        keplerData.forEach(keplerStar => {
            const tempDifference = Math.abs(keplerStar.teff - star.effectiveTemperature);
            const radiusDifference = Math.abs(keplerStar.radius - star.stellarRadius);

            const totalDifference = tempDifference + radiusDifference; // Simple sum, you can use more complex formula

            if (totalDifference < smallestDifference) {
                smallestDifference = totalDifference;
                closestMatch = keplerStar;
            }
        });
    }
    return closestMatch;
}

