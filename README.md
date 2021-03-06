# Self Check Automation
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

π¨ **κ³΅μ§: μ΄ μ€ν¬λ¦½νΈλ κ±΄κ°μμ λ¬Έμ κ° μμ κ²½μ°, λΈλΌμ°μ λ₯Ό μ΄κ³  λ³΅μ‘ν μΈμ¦ μ μ°¨λ₯Ό κ±°μΉ  νμ μμ΄ νλμ λͺλ Ήμ΄λ‘ λΉ λ₯΄κ² μκ°μ§λ¨μ λ§μΉκΈ° μν΄μ κ°λ°λμμ΅λλ€. μ€ν μ  λ°λμ κ°μΈ κ±΄κ°μνλ₯Ό νμΈν΄μ£ΌμκΈΈ λ°λλλ€.**

> **κ΅μ‘μ²­μμ μ€μνλ νμ κ±΄κ°μν μκ°μ§λ¨μ μν, λΉ λ₯΄κ³  κ°λ²Όμ΄ μλν μ€ν¬λ¦½νΈμλλ€.**
>
> Blazing fast COVID-19 Self-diagnosis check for Korean schools

![Typed-with-TypeScript](https://camo.githubusercontent.com/21132e0838961fbecb75077042aa9b15bc0bf6f9/68747470733a2f2f62616467656e2e6e65742f62616467652f4275696c74253230576974682f547970655363726970742f626c7565)

<img alt="result" src="./docs/images/result.png" width="512">

## Contributors β¨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://trendy-resume.now.sh/"><img src="https://avatars2.githubusercontent.com/u/32605822?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Junho Yeo</b></sub></a><br /><a href="https://github.com/Junho Yeo/self-check-automation/commits?author=junhoyeo" title="Code">π»</a> <a href="https://github.com/Junho Yeo/self-check-automation/commits?author=junhoyeo" title="Documentation">π</a> <a href="#maintenance-junhoyeo" title="Maintenance">π§</a></td>
    <td align="center"><a href="https://github.com/MinSeungHyun"><img src="https://avatars1.githubusercontent.com/u/44062683?v=4?s=100" width="100px;" alt=""/><br /><sub><b>SeungHyun</b></sub></a><br /><a href="https://github.com/Junho Yeo/self-check-automation/commits?author=MinSeungHyun" title="Code">π»</a> <a href="https://github.com/Junho Yeo/self-check-automation/commits?author=MinSeungHyun" title="Documentation">π</a> <a href="#maintenance-MinSeungHyun" title="Maintenance">π§</a></td>
    <td align="center"><a href="https://github.com/BelBone"><img src="https://avatars0.githubusercontent.com/u/63758483?v=4?s=100" width="100px;" alt=""/><br /><sub><b>BelBone</b></sub></a><br /><a href="https://github.com/Junho Yeo/self-check-automation/commits?author=BelBone" title="Code">π»</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## π Why

<img alt="meme-1" src="./docs/images/meme-1.jpg" width="256">

- λ§¨λ  λ€μ΄κ°μ μ²΄ν¬νκΈ° κ·μ°?κ³  μ€μλ‘ λΉΌλ¨Ήμλ€κ° κ°κ΅ΌλΉνλ©΄ μμν©λλ€.

- μ΄λ―Έ μ‘΄μ¬νλ κ°μ λͺ©μ μ λ€λ₯Έ νλ‘κ·Έλ¨λ€μ μλ λμ λ±μ μ΄μ©ν΄ λΈλΌμ°μ λ₯Ό μ μ΄νλ λ°©μμΌλ‘ κ΅¬νλμ΄ μκΈ° λλ¬Έμ λΆνμν λ©λͺ¨λ¦¬λ₯Ό λ§μ΄ μ¬μ©νκ³ , μλλ λλ €μ νΌκ³€ν©λλ€.

- νκ΅ μ½λλ λ λ­κΉ μ²μ± γλ©...

## π Usage

### 1. Clone repo
```bash
# κΉνλΈμμ νλ‘μ νΈλ₯Ό ν΄λ‘ ν©λλ€.
git clone https://github.com/junhoyeo/self-check-automation
cd self-check-automation
```

### 2. Update credentials
```json
{
  "schoolCode": "J100000855",
  "schoolName": "νκ΅­λμ§νΈλ―Έλμ΄κ³ λ±νκ΅",
  "schoolRegion": "κ²½κΈ°",
  "studentName": "μ¬μ€νΈ",
  "studentBirth": "030704"
}
```

[credentials.json](./credentials.json)μ κ°μΈμ λ³΄λ₯Ό μλ ₯ν©λλ€.

| νλλͺ | μ€λͺ | νμ | νμ μ¬λΆ |
| ---- | --- | --- | ------- |
| `schoolCode` | νκ΅ μ½λ | `string` | β |
| `schoolName` | νκ΅ μ΄λ¦ | `string` | **νμ** |
| `schoolRegion` | νκ΅μ μ§μ­ μ΄λ¦(μ/λ λ±μ κ΅¬λΆ) | `string` | **νμ** |
| `studentName` | μ¬μ©μ μ΄λ¦ | `string` | **νμ** |
| `studentBirth` | μ¬μ©μ μλμμΌ(`yyMMdd`λ‘ 6μλ¦¬ μ«μ) | `string` | **νμ** |

#### μ κΉ, νκ΅ μ½λλ₯Ό λͺ¨λ₯΄μλ κ΄μ°?μμ!
**νκ΅ μ½λ**λ κ΅μ‘νμ μ λ³΄μμ€ν(λμ΄μ€)μμ κ° νκ΅λ₯Ό κ΅¬λΆνκΈ° μν΄ λ΄λΆμ μΌλ‘ μ¬μ©νλ κ°μλλ€.<br />
κ·Έλ κΈ° λλ¬Έμ μ¬μ©μ μμ₯μμλ μ‘΄μ¬μ‘°μ°¨ λͺ¨λ₯΄λ κ²½μ°κ° λ§κ³ , μ€μ λ‘λ κ΅³μ΄ μκ³  μμ νμκ° μμ΅λλ€.

<img alt="result" src="./docs/images/get-school-code.png" width="672">

> νκ΅ μ΄λ¦λ§ μ νν μλ ₯νμ¨λ€λ©΄, μλμΌλ‘ νκ΅ μ½λλ₯Ό μ°Ύμ μ²΄ν¬μ μ¬μ©ν©λλ€.<br />
> μ΄ν credentials.jsonμ νκ΅ μ½λκ° μλμΌλ‘ μ μ₯λμ΄, μ΄ν μ€νλΆν°λ κ²μ μ μ°¨λ₯Ό κ±΄λλΈ μ μλλ‘ ν©λλ€.

### 3. Build & Run

```bash
# credentials.jsonμ νΈμ§ν λ€, νμμ€ν¬λ¦½νΈλ₯Ό μ»΄νμΌν©λλ€.
# μμ μ΄ λ°μνμ§ μλλ€λ©΄, λ€μ λΉλν  νμκ° μμ΅λλ€.
yarn
yarn build

# μ€ν¬λ¦½νΈλ₯Ό μ€νν©λλ€.
yarn start
```

## π½ Furthermore

### Todo

- [ ] νκ΅ μ½λ κ²μ μ, μ νν νκ΅λͺμ΄ μλ κ²μμ΄λ₯Ό μ¬μ©νμ κ²½μ°λ₯Ό μκ°ν΄ μ½λμ ν¨κ» μ κ³΅λλ νκ΅ μ΄λ¦μ κ°μ Έμ€λλ‘ νκΈ°
- [x] κ²μν νκ΅ μ½λλ₯Ό λ€μ μ€ν μμ λ°λ‘ μ¬μ©ν  μ μλλ‘ `credentials.json`μ μ μ₯νκΈ°
- [x] κ²½κΈ°λ μΈ λ€λ₯Έ κ΅μ‘μ²­λ μ§μ
