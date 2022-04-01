<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# deg2rad

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert an angle from degrees to radians.



<section class="usage">

## Usage

```javascript
import deg2rad from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-deg2rad@deno/mod.js';
```

#### deg2rad( x )

Converts an angle from degrees to radians.

```javascript
var r = deg2rad( 90.0 );
// returns ~1.571

r = deg2rad( -45.0 );
// returns ~-0.785

r = deg2rad( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import deg2rad from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-deg2rad@deno/mod.js';

var d;
var r;
var i;

for ( i = 0; i < 100; i++ ) {
    d = (randu()*720.0) - 360.0;
    r = deg2rad( d );
    console.log( 'degrees: %d => radians: %d', d, r );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/rad2deg`][@stdlib/math/base/special/rad2deg]</span><span class="delimiter">: </span><span class="description">convert an angle from radians to degrees.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-deg2rad.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-deg2rad

[test-image]: https://github.com/stdlib-js/math-base-special-deg2rad/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-deg2rad/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-deg2rad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-deg2rad?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-deg2rad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-deg2rad/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-deg2rad/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-deg2rad/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-deg2rad/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-deg2rad/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/rad2deg]: https://github.com/stdlib-js/math-base-special-rad2deg/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
