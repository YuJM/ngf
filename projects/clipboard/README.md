# ngf-clipboard
angular cilpboard module
## PeerDependencies
angular 9

## Install 
```npm install --save ngf-clipboard```

## Usage

```html
 <p #elRef>test</p>
 <button [ngfClip]="elRef" (ngfClipOut)="someFunc($event)">copy</button> 
// $event === {copyText: 'test'}
```
or

```html
 <button [ngfClip]="'testText'">copy</button>
```
