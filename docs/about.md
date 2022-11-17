---
layout: tutorial
title: Tipe Data Python
order: 6
---

Tipe data adalah suatu media atau memori pada komputer yang digunakan untuk menampung informasi.

Python sendiri mempunyai tipe data yang cukup unik bila kita bandingkan dengan bahasa pemrograman yang lain.

Berikut adalah tipe data dari bahasa pemrograman Python :

| Tipe Data     | Contoh                    | Penjelasan                                                                        |
| ------------- |-------------------------- | --------------------------------------------------------------------------------- |
| Boolean       |	`True` atau `False`	    | Menyatakan benar `True` yang bernilai `1`, atau salah `False` yang bernilai `0`   |
| String        |	`"Ayo belajar Python"`  | Menyatakan karakter/kalimat bisa berupa huruf angka, dll (diapit tanda `"` atau `'`)|
| Integer       |	`25` atau `1209`        | Menyatakan bilangan bulat                                                         |
| Float         |	`3.14` atau `0.99`      | Menyatakan bilangan yang mempunyai koma                                           |
| Hexadecimal   |	`9a` atau `1d3`	        | Menyatakan bilangan dalam format heksa (bilangan berbasis 16)                     |
| Complex       |	`1 + 5j  `              | Menyatakan pasangan angka real dan imajiner                                       |
| List          |	`['xyz', 786, 2.23]`    | Data untaian yang menyimpan berbagai tipe data dan isinya bisa diubah-ubah        |
| Tuple         |	`('xyz', 768, 2.23)`    | Data untaian yang menyimpan berbagai tipe data tapi isinya tidak bisa diubah      |
| Dictionary    |	`{'nama': 'adi','id':2}`| Data untaian yang menyimpan berbagai tipe data berupa pasangan penunjuk dan nilai |

Untuk mencoba berbagai macam tipe data, silahkan coba script Python dibawah ini.

```python
@requires_authorization(roles=["ADMIN"])
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```


---

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/tutorials/tipe-data-python.md)

<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/komentar-python"><i class="fas fa-arrow-circle-left"></i>Komentar Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/variabel-python" class="hoverable">Variabel Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
