# Supporting TS with Node.js like Deno

> This repo was created with the goal of providing a way to
> support running `.ts` files anywhere on your machine using
> ESM or CommonJS in Node.js v20.x.

🚨 Tested only in **MacOS** with Node.js **v20.8.0** 🚨

## Updating to Node.js v20.x

The easiest way is using [`nvm`](https://github.com/nvm-sh/nvm). To
install it run the following:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Now that `nvm` is installed, run the following to update Node.js:

```shell
nvm install 20.8.0
```

To set v20.8.0 as your default for all your terminal sessions run:

```shell
nvm alias default 20.8.0
```

## Installation and usage

Start cloning this repo to the **home directory** of your machine and installing it
dependencies:

```shell
git clone https://github.com/jlenon7/.ts-node.git ~/.ts-node && cd ~/.ts-node && npm i && cd
```

Let's add the `NODE_OPTIONS` environment variable to your 
terminal profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).
If you are using MacOS, your will probably be `~/.zshrc`:

> For `~/.zshrc`:

```shell
echo 'export NODE_OPTIONS="--require=$HOME/.ts-node/register.cjs"' >> ~/.zshrc && source ~/.zshrc
```

At this point you are able to run the following:

```shell
echo "console.log('Hello World!')" >> ~/Desktop/index.ts
node ~/Desktop/index.ts
```

You could also use in npm projects, but you will need to install
`ts-node` and configure a `tsconfig.json` for your project:

```shell
mkdir ts-project && cd ts-project
npm init -y
npm install ts-node -D
cp ~/.ts-node/tsconfig.json tsconfig.json
echo "console.log('Hello World!')" >> index.ts
node index.ts
```
