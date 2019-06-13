# Generative Crystals

This is the result of me working through Matthew Epler’s YouTube series [Designing Generative Systems](https://www.youtube.com/watch?v=rTqvf0BkTNE&list=PLyRZnpOSgMj3K8AV2I6UldnvTj6d_Zrf0). You can find his code [here](https://github.com/matthewepler/Generative-Design-Systems-with-P5js) and some of the details of what I changed and learned [here](https://stephanmax.is/writing/2018-07-16-implementing-a-generative-design-system).

![12 generatively created bicolor crystals on a 3⨉4 grid](screenshot.png)

## Build

```shell
$ npm install
$ npm start
```

Then go to the `build` folder and open `index.html` in your favorite browser (yep, just a plain HTML and JavaScript file—no dev server needed 😉).

If you need a minified version run

```shell
$ npm run build
```

## Model

The model is a DCGAN trained with tricolor crystals. 

- Machine used for training: NVIDIA Tesla V100 with 1 GPU in Google Cloud
- Number of images used for training: 3023

Model trained:

1 epoch

![1 epoch training](1epoch.png)

50 epoch

![50 epoch training](50epoch.png)