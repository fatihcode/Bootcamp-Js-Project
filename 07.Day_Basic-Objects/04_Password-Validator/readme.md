# ŞİFRE DOĞRULAYICI

* [ ] Bir dizideki her parolanın geçerli bir parola içerip içermediğini kontrol edecek (parola kriterleri için aşağıya bakın) ve parolanın geçerli olup olmadığını doğru veya yanlış booleanlarla yeni bir dizi döndürecek bir program yazın.

Geçerli olması için bir parolanın:

- En az 5 karaktere sahip olun.
- En az bir İngilizce büyük harfe `(A-Z)` sahip olun
- En az bir İngilizce küçük harfe `(a-z)` sahip olun
- En az bir numaraya `(0-9)` sahip olun
- En az bir alfasayısal olmayan simgeye sahip olun `("!", "#", "$", "%", ".", "*", "&")`
- Parolalar önceki parolalardan biri olmamalıdır.

**Beklenen Sonuç Örneği:**

```
PasswordValidationResult= [yanlış, doğru, yanlış, yanlış, doğru]
```

### İpucu;

> `match()` yöntemini kullanabilirsiniz. Ve normal ifade (Normal İfadeler)

***İyi şanslar!***

---

# PASSWORD VALIDATOR

* [ ] Write a program that should check if each password in an array contains a valid password (see below for password criteria) and return a new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:

- Have at least 5 characters.
- Have at least one English uppercase letter `(A-Z)`
- Have at least one English lowercase letter `(a-z)`
- Have at least one number `(0-9)`
- Have at least one non-alphanumeric symbol `("!", "#", "$", "%", ".", "*", "&")`
- Passwords must not be any previous password.

**Expected Result Example:**

```
PasswordValidationResult= [false, true, false, false, true]
```

### HINT;

> you can use `match()` method. And regex (Regular Expressions)

***Good luck!***
