/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var deg2rad = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof deg2rad, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `+infinity`', function test( t ) {
	var r = deg2rad( PINF );
	t.strictEqual( r, PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `-infinity`', function test( t ) {
	var r = deg2rad( NINF );
	t.strictEqual( r, NINF, 'returns -infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var r = deg2rad( NaN );
	t.strictEqual( isnan( r ), true, 'returns NaN' );
	t.end();
});

tape( 'the function converts an angle from degrees to radians', function test( t ) {
	var expected;
	var x;
	var r;
	var i;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		r = deg2rad( x[i] );
		t.strictEqual( r, expected[i], 'returns '+expected[i]+' when provided '+x[i] );
	}
	t.end();
});

tape( 'if provided a value less than `~5e-324*180/pi`, the function will underflow', function test( t ) {
	var r = deg2rad( 1.0e-322 );
	t.strictEqual( r, 0.0, 'returns 0' );
	t.end();
});
