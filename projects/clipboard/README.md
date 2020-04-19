# ngf-clipboard
angular cilpboard module
## PeerDependencies
angular 9

## Install 
```npm install --save ngf-clipboard```

## Usage

```html
 <p #elRef>test</p>
 <button [ngfClip]="elRef">copy</button>
```
or

```html
 <button [ngfClip]="'testText'">copy</button>
```
