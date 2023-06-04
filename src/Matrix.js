export default class Matrix
{
    constructor(matrix)
    {
        this._matrix = matrix;
    }

    findRectangle()
    {
        //get the index of first 0
        //while not 1, accumulate indices
        //store index of first 0 and total
        //repeat for each array
        //at the end compare all the first indices and totals
        //if all equal, you have a matrix
        if(this._matrix[0].length < 1)
            return null;

        let results = [];

        for(let row of this._matrix)
        {
            let index = row.indexOf(0);
            let lastIndex = row.lastIndexOf(0);
            let contiguousRow = true;

            if(index !== -1 && lastIndex !== -1 && index !== lastIndex)
            {
                for(let i = index; i <= lastIndex; i++)
                {
                    if(i !== 0)
                    {
                        contiguousRow = false;
                        break;
                    }
                }
            }

            if(contiguousRow)
            {
                results.push({
                    x: index, length: lastIndex - index
                });
            }
        }

        if(results.length < 1)
            return null;

        
        let testResult = results[0];

        let allRowsSame =  results.every(i => { 
            i.x = testResult.x;
            i.length = testResult.length;
        });

        return (allRowsSame) ? results: null;
    }
}