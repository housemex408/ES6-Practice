const SHA256 =  require('crypto-js/sha256');

class Block
{
    constructor(index, timestamp, data, previousHash = '')
    {
        this._index = index;
        this._timestamp = timestamp;
        this._data = data;
        this._previousHash = previousHash;
        this._hash = this.calculateHash();
    }

    calculateHash()
    {
        return SHA256(this._index + this._previousHash + this._timestamp + JSON.stringify(this._data)).toString();
    }
}

class BlockChain
{
    constructor()
    {
        this._chain = [this.createGenesisBlock()];
    }

    createGenesisBlock()
    {
        return new Block(0, '01/01/2018', 'Genesis Block', '0');
    }

    getLatestBlock()
    {
        return this._chain[this._chain.length - 1];
    }

    addBlock(newBlock)
    {
        newBlock._previousHash = this.getLatestBlock()._hash;
        newBlock._hash = newBlock.calculateHash();
        this._chain.push(newBlock);
    }

    isChainValid()
    {
        for(let i = 1; i < this._chain.length; i++)
        {
            const currentBlock = this._chain[i];
            const previousBlock = this._chain[i-1];

            if(currentBlock._hash !== currentBlock.calculateHash())
            {
                return false;
            }
            if(currentBlock._previousHash !== previousBlock._hash)
            {
                return false;
            }
        }
        return true;
    }
}

let joseCoin = new BlockChain();
joseCoin.addBlock(new Block(1, '01/02/2018', { amount: 10 }));
joseCoin.addBlock(new Block(2, '01/04/2018', { amount: 20 }));

console.log('Is BlockChain valid: ' + joseCoin.isChainValid());

joseCoin._chain[1].data  = { amount:  100 }
console.log('Is BlockChain valid: ' + joseCoin.isChainValid());
//console.log(JSON.stringify(joseCoin, null, 4));