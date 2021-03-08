const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://api.tamilanexpress.com/';

export const contact = {
  phone: '+1-1001-234-5678',
  email: 'hello@tamilanexpress.com',
  address: '126, select ave - unit 3 scarborough on, m1v 3y6, ontario, canada.',
  openHours: {
    weekdays: 'Mon-Fri: 08:00 - 20:00',
    weekend: 'Mon-Fri: 08:00 - 20:00',
  },
};

export const social = {
  facebook: 'https://facebook.com/tamilanexpress',
  instagram: 'https://instagram.com/tamilanexpress',
  twitter: 'https://twitter.com/tamilanexpress',
}

export const products = [
  {
    id: '001',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://cdn2.webdamdb.com/md_IRLcaRTbLgZ1.png?1517915165',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    id: '002',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://supersavings.lk/wp-content/uploads/2020/07/nestomalt-440g.png',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 0,
  },
  {
    id: '003',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://images.ctfassets.net/xuuihvmvy6c9/noJGw3I5yNiK2nJrQkN5W/f1bc273ad39fe467f384ef899029d7d4/Web_1920________26.png',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    id: '004',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCzK_8A55qmn6ENtHjcw14SFLzH0DxdwWxQ&usqp=CAU',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    id: '005',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://img2.pngio.com/nestle-milkmaid-96573-png-images-pngio-milkmaid-png-650_650.png',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    id: '006',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://www.pngitem.com/pimgs/m/284-2843673_coffee-products-in-sri-lanka-hd-png-download.png',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    id: '007',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhMTExITFRUVFhcVFxcXFxgWGBoYGBcYFxgVFRgZHSggGBolGxUXITEhJSkrLi4uFx8zODMtOigtLisBCgoKDg0OGxAQGy0mICU1MC0tLTUtKy8yLzIvLy8tLS0tLS0tLS0tLzUtLS0tLy0tLi0tLS0tLS0vLy0tLy8vLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEMQAAEDAgMFBQUGAggHAQAAAAEAAhEDIQQSMQUiQVFhBhMycYFCkaGxwSNSYnLR8BSCBzNDU5PC0uEWNJKio7LxFf/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAA4EQACAQIDBAkEAQQBBQEAAAAAAQIDEQQhMRJBUWEFEyJxgZGhsfAywdHhQhQjM/GiFUNicrJS/9oADAMBAAIRAxEAPwD7igCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDRiMXTp+N7W+ZAXE6sKavNpd51GMpaIrMR2motBLcz44gQPe6FUl0hSSbjd28vN2RMsNO9nl85E/Z20GV25mHzHEeasUK8K0dqLIqlOUHZktTHAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBqr4ljLve1vmQFxOpCH1NI6jFy0RSY3tjhaejy86Q0TdVamPpQ4+3vYmhhpy0/Ptcp8X24qH+qoQODnmB7zF1n1emYrKNvV+mXuyxDA8fnu/QpcZ2gxVSzq2UGRlYLyNWyIE9CZVCp0pVnpfzsvSz9WWoYOK+fm/sVtQE3cXFxE77g2bTdrTI1i09VSeJm3dPxSz89/iyxGlDv9f0aA0Fv2YGfQOYHwD+K8geV+o1U9NYlPavJR5tL1eXn5M5fUXs7PkrX8LE7Zu0H0YdnyvBdoQTlLnZGvy2JyZQdRINzqfKtV0qsZ0HnZXayTe+y4EUae1C1T9n0HYXaJleGOhlTlwd+X9Fv4HpOGIWzLKXDj3fgzq+FlTzWaLxahVCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgOe7SbdqUJFJjXECXTMgHiANVWxE6ii1SttcyWlCLfb0OO2p2jxdRgLKhuRIZuw3K64AEk5gwcYDiYMLCp4yvUlONR2ktI6d/C+WaV8zQdCnHZaWW962KV1YPElweTqXucYMXsOvIu8+VCdSspNSuu5W+eKRdjTpbs14P3/CNtJxJ3MxBEfZtMTx3wAReIkQLzMiPI4OtP8Ajzzy98vJ+W/yVaklZv7+iuvXyM2UiTENaYvmcXuABn2ZBAOgPOymhgW5bMpeS8Hrbxs2RyxOV0vZeiv9jCq9oFnl0a5QGNiJ3g3N9F1Vp4enlFbT56eGj9WeQdWecsvf1uaGututbBNt3OZvFyTF/JQvETTydu6y9dfVkjpJ/Vn35mWYPjO9/QCXgjrBcI69AuGpu8reL4+gyWRhSxTLgMJsdTnv+VhdxA5frz1clm39vV2Pb8CxoscIJe0n7rWkAdcxMk9fgvJKioJwb2jxbe09pZHXdn+08EU65to2ofk/9VsYDpbPq677n+fz5lLE4LLap+X4OwBX0RmBAEAQBAEAQBAEAQBAEAQBAEAQBAEBw3bHFso18z3tYCGgFzg0TeACeNiqdaLc8iem+yUuIokHPTF/abA97Z49FTrUVWzyU1o7ejJ6dRxy3EZ+Jc6+YAc4aCPUtPFZUcXWpzdOs2u6340LnUwktqCTMRUolu9iQ/SQCXaxlkSY93HpKtxjFxttd18vxp4kT2k/p8jVTq06oIptLxbwvmQZI0zGDAvFukLh4dzklUaXd6/Y929nOJHw1NxJPdmnYi5DjoQCDLo9kxA0I4hU5VMLq7vkn+kWLVORsqbMBeHGpOjhxynWJfItzAb5Llu7UKOd1nfd3tW9T1aXl/slUqdOm2TleNSHbwv5z1OkXKkpzlSjtKSfGORzKG27WfJmY2q2pPdvblAmBFhzNtLG/RR4nEVnK1rLhZeRJHC9X9SzNVLENdOVzXc4IPy0VCUZR1VvAmcGtVYnUcM14EPg8iPkZVyjhadVLZnZ8GitOrODzjkX2xNr1MNDKu9S4OFyz65VrYSvWwnYrZw48P0U61KFbtU8pcOJ2NOoHAOaQQRIIuCOi34yUldaGc007MyXp4EAQBAEAQBAEAQBAEAQBAEAQBAfOP6SWfb0yZjKdDBmCQJ4ae6Vj9LX2FbivuaGA+r5yOa2Zj3UIa6TT9kgSW2nKBxA+7w9m262rhsYp9mo8+P55c/Pi56+Gt2oab1w5rl877qvQbUbnpw7MJLbFrxHiHA2OvFWcVQ66Gy8pLR/NxXo1Nh33EHKIiBGkR8CF8xUUoTalk0a0bSVzNtui4vnc9sg94EucQBqSbDzK9u5Pi2FHcirq7YpGpkD2BsT3hu2/AEGJVqGFqKO00+4sf009ja2W+RYMq4eMlSu0NLTJLmiRzBO82xH0KvUMNCTT08s/wAFNquu1CLfnl9mUO1tn0ahAw5rZWNDQ3unZHxBjOTrpqALKaU6VO9pXfO3p/o0MNiKsf8AMlnnqrrwsSdjbPqtdncGMtGXxuI6umG+QCzcTXpyWym36IYirGS2U7+h0DaRdwKz5TVinoWeBwjjOao5o8p+dlq9HupWutqSXddeuRSruMc7K503ZOkWMe2SWh1uki8clvdF0J0acozd88ihiqinJNIvVplUIAgCAIAgCAIAgCAIAgCAIAgCA4Tt/Rz1ABrkDm+YLrX5iR6rMx9pPq3vX3LeGls9o4ak+TEWc45mQYB0k25hvUEO0Nl85Upum7Sya+fN2m42VKMo7SfczPAYx9ElzQTTzXaSJBMGQZgE5gbwHTfK6S7Qw2L2bU6mm7l3cuW7ddZKtiMLftQ14ce78fFegtrN7ymZnURExrY3a8aEG/AqTG4Tro7Ufq3c180K9CtsOz0PMNQzujof371iUKEqtTq9+fzzL9SooR2jyphHRdtvKR8F5LD1oLacX3/6PY1oN5M0UsEwTDGjyAH0UTqyerJZTk9T3D7BpgkikCScxJGY3vqZPFSOtWm9lXeWi4eB5LEO2byLbC7OybxhrRrMAf7K1hsDiZzUnHLn+CnWxMLWueVNuYVoIYe81/qmmoBHA1B9mw/mcFr1KNCneNRpX3b/AAtn6cynGU5NbKbZXnbtR/8AUUGiRIc77Ug8iGEU/wDzKo62CoO8YXfF5e95f8S1/S4iX+RqPf8AhZmWC2tXFZjK0FryGkZA1zS7Nke1zXua9hc3KRqC4GYVrCY9YiWw0t9mr7tzTV9CKvheqipxldfOJ9A2BZjz+L6BbGH+lmfU1NG0O01KnZg7w9DDffx9FRxPS9Gk9mPafLTz/FyanhJyzeRTVu1dY+FrG+hJ+J+izJ9N139MUvN/gtRwUFq2R/8AiTE/fH/S39FD/wBXxXFeR3/SUuHqZ0+1GIGpY7zb+kLqPTGJWtn4fs8eDpPiWGG7X/3lL1afof1V2l04v+5Dy/DIZYH/APLL7Z+06Vcbjr8Wmzh6LXoYqlXV6bv7+RTqUp0/qRMVgjCAIAgCAIAgCAIAgOI7c2rUz+D/ADFfOdNycKkJLgy7hVeLRymMwweQ9hy1PdmtoesDXkIPCIKdSGKhsT13P7Pl7bidOVJ5Zrevm8rqJl5I3XaPYdOEkDlGrfxA3EE061OVPsTXc/no9/fcvxnGULrTjvXJ8+ZnhKwpVMzDDCRnbPAgQ4cwBEHW2W4jLcwWIlGSpz0fv9ufHXXWDE0dqO3v9/37nV4RhLoFgbugDW3zv+yr1WjPavTduOmZSjNW7WfAmHu6AL3OAaNS42kmBHUmBHEmF5hsI6Lfay4ff8nlSrtLQpsX2hp5j3dAucRIznup/kh1Uf4ar1lgNvrGtp8tPN2j6lilSxUo9lWXF/k0vxmMqDdik0xGVrafoX1c5P8AhNUM+l4Q7NOKX/L0Vl/yZ2sFG/8AcqeWf69SFXwTDLq1XvCA6oBesRkMOymsXNaQbbrWceqpzx+Jq5Xe5a2WemUberZap4amn2YX0V5Pjpkvyze5gDyG0g9zHkTULqhs0OJbmO7rAA/+VE3s3crJrdZb7Z8fEnTezdysmt2XLdr4nuMDyGGq9tMgxdwDXb5iG3uWxwmbJT2E2oK/hmsvyKewm1BX8M1l+Tbs1hrV2mSWUYLiWxcAlrDydLmujUCm2Yzha/RlBx/utWWdubeXjbPPS7stDPxlSOz1a1vd/gvdobRIYaLbAnM88xAhvlZS9IYxqHUw36/j8kGHopvbfgVQWIXTwhAYwgPF6AgMqdQtILSQRoRYruE5QkpRdmeOKkrM7/YG0u/pSfG2zvPgfX9V9hgMX/U0tp6rJmPXpdXK24s1dIAgCAIAgCAIAgCA4rt4Ptaf5D818509rT8fsXcJozj8bUytBGsmLxfK6FiUL7WXzMty0I7HDEfhqtFn3AdFwHQOuo0kxIJB2YzhUjsVPB8P1yfuRJypvaj5cSO993B4IfZrhlkHk4x4dJnwkAkcQKNWhKk0npqs/bj73ye4vU5xqRy0Xp+TsNhEljSdS1hPmW3X0bXaMhaFTtet32KNOd2jIAnLvd02o92bgS2tSaHagd5HiWV0tWlCKprR2b8W0st9rN23uxfwFONpVHusl477b/yY4d1Q7rKZptyOgNa1u/cC4JEWmQTI84WFNQTvN3d97by9GaM1BZyld34t5ejNZptJAfVDntcXEU81RxBrCo3MG3bAYAOUnlfrakl2Y2TW+yX02euuvidqTSvCOTW+yX02euuviam4im45KdI1XNc4G5eRmzEgtoh0DfdZ5brdWaWDxNTNXtyVllbfKy3LNXK88VCH1T8Iq+luNuCzRK7jEES4totJDDJDTmcQ1m5RLnGZH9q3UelyHRMVnUkv/p+to+jKksbH+EPFu/pp6G+hsRoJnvKjs7GmD3LSN0ueHMPePABNnPdJbCsxhh42UY7T55+n0ryIalatUXbllwWSLgxSZlY1rWtsA0QBxsB6qLGYirCLZzSppuxVVcRnqv4CwHuWZi6vWNTStyL1OnswSMnCFWjJMWPJXQPEB4vQeID0CV45JA6TsSftKg4ZR81u9At7U+GX3KOP0R16+kM0IAgCAIAgCAIAgOM7e+Ol+V3zC+d6f/7fj9i7hN5xVUZwAYDmOz3sLcQeRDteErDi9l5aPIvzjvWhi2i0wWWIcHcRxAMdDfmPJddZOLz4EdkTa+Fp1oFVgdFuIsdWmDdpgS02PELRweP0jK3K/uuZDOnvRfbNOvp9VrRmnmQNEDbOxHvq99Re0OOXM1xczeaC1tRlRoJY7KcpBa4OAbYReLE4enXSu7NZaXTXBr2zViWhiJ0W7K6eqZEGyH1C9tWtJaGh7WtdVIzaEGpFM/4XBV6fR9GGd2+7L8y9Sd42r/BKPdr56kp2yaTQ5rqfeRly9+4vYdCT3Q3Gx0aLhczxWHwz7MUn3Z+bzIdmdV3k7lg2qQSAd2wawNs2AZjKLk8tbaKWP9VXjtJWW67zfDI4fVwdjE0yRLbuccxAjkAHSSBoBEkaKs+jsVVim5We/h4WJFWpxfIyoE70mL8efL98wRqCvKdCdBzjUaW+/wCPHut4o6cozs4mnFvBAAcqOMqwlBRhLL583k9GLTbaKajd7/zgfNVqmUY9xcehPa9V2iIzytPRebUkeHow7To5e9Yzy56MKPvBOsYue9y0cSV5tyYuzXUfyEIlfU9L3sP46n5G/Mr6joP6p+H3M/HaROwX0JnBAEAQBAEAQBAEBx3b4b1E9H/Nq+f6eXZpvv8AsXMJvOJxrTIdNgNR4m/i6t5josGm1a3x8u81KTWnxmJeczQGgQYLehMhzTxHThde2Vm2/H7EcoNWa0JwVc5LLZTjvR0+q08JVqzTUdV+yKcYrUlfxFyHOyn3+aKu5OUKs9lrTfvzPeryTirmRxHBnqY1Oiu06zqONLDPTNyfz5ouUcobKcqnkeYvEQN40wJAvNptmzn/AE9JGq150aU0lNX7ypGpJaHFdldqPxINWqXznDGNa8hklgeC5pJAOV7d28RxvCdRuoopZa3+dxKqS2G2zu8NHC0kkxzJkn1MqYrh+Fa8k5jcjg20NA4g8lFUoUqrW3FMkhUlH6XYrm1KbWuc8Wa3M4zZoygwOd7L52nhaP8AUypbN7Pjklu788jQlUn1alexS4XHtcWkgMzQR9M/IkfovMdgXTgnDOys/wAktKttXT8Cy/fwWQSm0C/75Lh6AyaNV4eGTQvAeEL0Gp40XaBf9gq9J5r5XzUaWtc3k2JBHMEk36L7DofDunTc5ay3ctxl42ptSUVuOvWwUggCAIAgCAIAgCA4/wDpB0pRrv8A0WH04v7cO8uYP6mcVVq6ESOE8jGjraX98L5yMd3zwL0lZmqqwNuJIkEhurTeXDm29x5rqLctf9k8J7WT19zfhcQXbp1iQR4S3g4H6KOcLZrQ4nC2a0LXZ9SJtJNhGqmwtXq9qybbyVtfnyxE4bXcShg8ol5joNT9ArEOjWrSrPXSK1b4cEevEXyh5lbi9rU6dgQTJAgOLczQdwkDdnN4uE3HBbOBwqoOTbzdlZaK26+/vIK0ZVEnbLXm+djTtzBVHQS85HCHtAlrZMSDE2BJPPoLLRrUr03bUq4eSVRN6HN9isCcJUuRVzNYSATLHunOQDq4w0mbwPQw1qkYzjclVOUk1cmdou0QeHU2ucwABziDldIBgTq0ZoPA2kaKOrWlZbPFfv0JcNh7t33Jl1he0tOoKVMeKo0F0kAtbEzlNyupYmNOO1IqqlK5q7WOmg6CSHEDlIIa6bWBuRYcFnunBYiNWno05W53tfxuXKbcoOMu45jGOL2gNtyU0pE0I55m3A7Xq0oaSXN5OGYenEeh9FSq4OlVztZ8UTWe4ucP2kYfFTdP4CHfAwVRn0XP+Ek/nieXJg29QGrntn7zHD6KtLo/EL+Pqhe5sG2qESHuPkx/6Iuj8Q/4+qPG7ETEdpKYkNY8n8UNH1PwU0Oi6v8AJpeo2r6FLjdt1atvC37rbA/mOp/dlp4fA0qTvq+L+yI5NsmdgcY9m1aAF2vpvY/yiWzzuB7ls0J5pFGvC6ufcVdKQQBAEAQBAEAQBAcl2+FqPm//ACrE6d/wxfP7Mt4T6mcFly7zRYiCDpN913TQA8NF87e+T1+Zo1U1NWfz5vN7AJmDxIJgEE+wePNcPT55kLVmb6TYGka25EmT8VHJ5nrbepOwGIyTABJ58FPhsU8O20k2/Q86rrMmyVXpl1Jzy45nCAR7N+A5wCAOJIC2uj4OpKOIqNyk7pcI6+X78SCtLZvCKyVu9nHYPZZollI1AX1CGkMFZrXNaBJL84pusJNiTJkctWjHtpE2KqbVNyt52vrw19jqKWJqPaQaeUgFmVxEw9s53EGItFut1O6lqjjL580M9U04Jx+fNSn2Zh2NMBzXiXue4CxNQNDgwzMHK05tDAjjMaoSqSvLQklVjTWWvz5YrcbhqVam8MHeVMPvNDrl1J85BmaMxAcHNEXi/VQV6KjK0XZfL/MyxhsROPexs7Yg7yauZpflBmBLyA1rG5XGGyTJgOA5cCpqSSnmeVKiUbR13s6PtBg89BobbM6WzbRpyg+fwzclRk3SUpTVs7dyWS/Pie0rNq3D13lFTw7TYiDx6HkVzqTOTQxGzoEEA9Rf4r3NCNQrnbM6pck2w/Zzm+EmPLL8ASvdobSepn/+e4i7jPLKCPfm+iXPNtJ5Iybs0df30Q5dQ9OGDVImR3Lv+j3Z845lT7oPyN1aw/1or4h9g+wrSM8IAgCAIAgCAIAgOT/pAG5SI1DnfIfosXpz/DHv+zLeD+tnFyCMwi9jyNwCCOfBfL5p2ZoNOLI+SLiCDAg3/lf15O9FJe+T+c1+CVSU1Z/PnAlYdwLRlmBaDqOhlRTTvmROLi7Eug2x81G1fM7psg9p6dQ4aKTc0uh4AklkXAEiTpYGSM/Ir6DoiKdCez9V8+62Xrc8UorER28lbLvKjD4Wv3lNwYabmjPBZcjQBwLiQHWEucddRodvDRbmr5EeOnBUmou9+Z0TMFiMRT+27tjoy7jSTH8xI48W2kxGqvSjT2r2uY8ZzSsnYgHYFMU6g/iHMYRNSY+7xcIEB02A+Fj7OTcbMRykV2z62VneU21XU4LaYeabahABcXkbuZgygCYAtpYrNd2szUaz5/PIusLsyawxDnA2+zay8gt8RdxselwIsFBiekI4SDjrOWiIY0XVfBLUl7SG7TdfeeQbW0my+epwbw8qrbu3+7o0Y26zZW5Hu0cCyo0OG6+wkDp7Q4qWGJUKafhbgRRT2mmQP4aozVuYc23+GqtU8TTnvOZQM6NWlO+wnyOU/EK1Fx3oicZbj2sKJO4HAciQfiElsbjxbe8M7rjm8gB8yfoi2N47RqfWAsxrZ4WzH3LxySOlFvUxp7LqVDcZZ4u19G6++FA8TTTtfM7tkdd2TwjGVQGXABJPEmDJPwWjgpRnUbjnbeU8Q3s5naLVKYQBAEAQBAEAQBAcv28H2dL8x+SxOnf8Me/7Mt4T6mcAWZCBqHRrxjSPxAR5xzXzd9pX4fPL27jV+uOfz9exsY2IIMz7jpr+Jct3yfz9ELTTMWUocC02sOcD7ruPkeC9crxs/nNfcm2lKOfz5vL3ZgGWpPQ9fRWMGoOFTb0STK0201YmVKLchLSZ0uTpIzSOgk+i28HQw20qlNvz9GiCrOpZxl7HJbNweKoV6rg5mV4c5skODhJcIMSTDZgTAMaALQg5JtpEk3TnGMW9PmhaUm4irIf3via0taQwEOgneaA4GDqCNDzXcalXeQypUUsjlO0WGGGfSYAW98Ia2S+X7uV284mZfqPcvJzlLW7LNClBxk00ree/TK+4scV2Sq1KzSa5NMGQSftYgQ2GgjhMg2k24CCpiKUHZyV+CzfdZEcJXjo/t3tnVjBPaGhrSGtADRNwBpxlfO4yli69V1thpbtLpL1uWKU6UI7N+8r8fUJfSLpO8fdChpVpz2nUbdrE6hFJqJLr0yLnQngoqlOUe09GcQknlwNrXjwnLnMEAuAdEey2ZMq1TwtWdLaVNvg89OS3kMqkVK20SWlp3arG6EXbf1B+aloYuNPs1o2dmr2s/Ffficzg9YMitwFEkTTbFpgKvTxUpVIub7OV7L580O3dJ21JWH2TRkENYRBMReeQBvHmtDDwc6l+s2lm7aO+eSWttM2QzqNLSxvdgAGzTEQJIgD5BeYjATlS26Um99nr6Hka3atLzKbF7Yp5YZFQgxuHM3ON2HPEtafwjM/k0qPqNmmoVlsb2r3k8rXtpHLjkdxbnL+3n7LxLfsM+oa1QVABlbIGUNjMRazjItxM69Atno2UJRvBWXn533lXFRcdXc7ZahTCAIAgCAIAgCA01akIDle19fMxg5OPyWH09/gj3/ZlvCfUzlnUwRB0K+VUrO6NBO2aIjmFjjYkOBJtqRJtGjtPP0Uyakua+eXsTZTj8+W9iW0Aw4aEfPioXdZMhasyy2W2c3p/tCuYCDlN23L/AFYjqOyJ1Y7pvF+AvqtKvKKpNXt76+eW7lbQ4gm5LeHtDAHZ3Ek5hN5MEaaizj8NdDYpV6eEiqlSpKSksr/ZbvEjlCVV2jFKxGfiJnUSQbG4IgCDH094so6nTkNpKlFvjfhysdrBu3bZCqYZj6gqOl7qYhsiGskQYEmbDiSRCixXTFo3pwafF7u5fknpU5KLhtKz1tv7/wBG87RNKIhxc5jeZ3nhpJI4CeKzMFiq1Ny2d6b0zyV+93/Z3Vpxla5jgtsmt7QaAG5o8UuYx9hyh4v1VqpjqzaU5bK4pbrtc88jiNGC0V3zMtrNbnpNi0F5vfgLnyU1eNOMXCKyspPj4sUnJ3k3noSbFlhcBxaDeXC4HkfqucLClXcYvS/s728vcjqOULs5jCbNpFsPu1zmMc7JRcar6lJtR1au6owyXF8AaXaOIUOJxFV1XLfm9Xkk2rJJrhdlulSpxpK0U7q7vfjbK1u9/ol4TAgR3GIytENDQatJoMZgA3MaU5bwKa9/6jiIq07vvtL3V/U4nhqS1g0+T+37M6OHxRu3E5xwh+FcL6Qf4QH4lePHU1rShf8A9Le0jiWHgstua8P2bWYbGT/zDhNoD8O2Y4buEze5y6XSkYX2IRT5Q/MjnqKX8pyfgvyR8RgGPE1q/etc1rwN+sIndcO+c6lroQwLmfSOJnld8NbekUn6ksMPTi8oXfN7+5Z+psdBa4UmOZUAbvPu7IZzNkncALHAgEAQNFVWTW201wXH767yfS201bPJenfrvL3sviQ1z3TrYHo21vUFfU9FRtT9fMxsY+0dZh8WCtUpkxrpQGSAIAgCAIAUBAxuhQHHbaqG4Khr0IV6bpzWTOoTcHdFRSeHaeq+HxeFnhqmxLwfFGrTqKauj19MOBB0KrJ2d0SJtO6IRLqbuLgfWfLk/p7XmprKa+fLexPZTXz5b2LfAVDGZp5EdV5RlUpzvB2a9SHZWakjYapd4iVzLESqP+5J23/okUFFdlGnaO0wH0w4QHuDBcQ2SA2ZN5cWttxcFPVqTxkm9FFZLlv9M33dxxGKpLvKwVczRvFwLM4DjllzBSBbk4k97McCw9VPDDzlCThZKOq32zz9MuKPHUSaT3nlYOY0gvLA9lUkBpL25DDHta0ZnAZmkyeQ4qCk1Kayvmu531T3bsvPcdSvY8r5KbpmSINRjQWt+zFeqxwJvmD6bhObhcaLmDnNez357Kfo09O49dl87ydgnOLiCxrWgFoygnwOLAM1p3QLRbqoalna7bf5V9O87jkbMZU+0ZOt2gdLBWadRuM3LXJWPFHLLvLDDENuZubRFiI3l1hpQpranfPS258fmviQ1E5Oy+cioqsdQJhneU9AA15AAMBjhTDnNAmA4NLcgAdGUF1qdNYt7dN9ret//sk7XT1te6YhUVNbM7pbms7cma8JXw7w5jc5Ae1zm0306ozsa0NkNcagjK0wQLjqqlWlXpvtLPTNNa665FlVtrOM4t5rhrry3m9lKmTTJNcd2KbQP4euyW0w6BOWZl2vSIuVG3OzVlnd/VF6+JI3Us1ZZ3f1Revie02U25L1yWVH1GkYerAz1HucCS3i15aTI0lG5u+SzST7S3JLjyueSc3fKKTST7UdyS48Vcj0cXSblp02uqPpsp08pcHuysMtJp0A9+t7tAMXViGFr1m2lq28k9+ucrL3IamIhduU1m28rvXvsiU/DV6n9bLGt3sgABIl0HIC5rdAcznOP4GG4uwwEaEdueb4Lkt7yy3WS5XZVeIu7U1bm834cPmZ5jK/cuY0Wtp8ls9HRkoyctX+CjiGrpIv9iYwuhaJWOtwrpCA3oAgCAIAgCA0YilIQHM7Z2fMoDi8XRdSdmHqOBHJVMZhIYmnsS8HwJKdR03dEhtUOYS3kdeB5EC6+IrUJ0KvV1FmvmRrU5RnZoocC19FzSS97TAqsIzEOH9qwn2S45vU8RA3Mbgoyp3grNfH6GjUlCqmrJP+L5cHzSy+XOuwNIuMDmPqsHD0pVaqhHUz9pRTbJeIphpyMFwN48fKeCvYulGi+poLNK8nv7uX+jylJyW3PTciBXwEioXNzBwymZAyj2ZFxckyLyeFlSjGrTtPZdovW11f5kStxllfUwoVXR3VNrabXPdcSCS7O9xmbycxgaT/ADLYpdZWi6VOGystp5vlbyyXIry2YPak78DHaOyQ/I0nSnVpuneeM5pw5rgYDh3ZINyC4HUKvip0cH/bpZyvd8Mr5W03+WR1TUqvalpuMu6pMLnP3ibnNcxvwGjoKrwLTBgzAWaq9SaUbZcsuGd/BPhfcWNhImZYJv5FRKKjJpvxPb3VyHiaW+yY0dHwPyBVqmn1cr/LDaW4mmmWwDyn3ryUJQ7Mu/zI1JPNEbE1W2YSQ59hAM6jjw4mOIa7kUhF/Vw+fPAN7h3lGuAKgp1AWyBVY12kzOcEa8uRV2hiMRSdnOVr52d8uV7kE6cXuQobFonL3eHox7RZTDR6AAfv3qZYnEzm1G8rf+C492tvU4dOmld5eJm7YVIHfw2H5tmmx5jrmbYryvicXSt2tm6vkoq2fdcQhTeiJj6bWMOZxYxwa0NZYjMS0EAWEyPcvaUqjcalWo+NtrO3G2iWTe8O2kV6ETH7TkZaIMkNcczSDlIOQEGDY6z10VrEVlK8E8r5vutl3aZ73y15hC2bKTaoJqUwTJDBJ6yVq9HZ0r8yrifqOm7O0TZXyudrhG2QEhAEAQBAEAQBARcVQBCA5XbOy5myA5CtTdRfIEjiOfl1VDpDAxxVO2klo/t3E1Gq6b5FFXxHdVSwuIbUzOpVMgMZyXGmTIsHu+ImIBGfhKktjq55Sjk/nM+npxVakqsFe1rq/DK+/cvmd+17OVXNptJa5xytBvJsIzTxnX1WRh6rw+JnaO0s727zOxMIyk1e2Za0QHkvyfv4fBWqCp4iUq3V/PTXlnl33gntQShtGWIrBrC52gGsH42mBzU9Wb6pp58Mn72u0uOvecRj2sitqY5z47ukGgAua50NuQYN+eYzEG5VGtjarjswtGPLV8c/x5k8aMU7yzZCrOJkFxN9KYnTgXaTzWZ1bhnbxbLKaYFHKAZFPqSHvmTPXT5nmpaVCtXXYi5bsslp89DiVSEPqdjOvtAey0usBJsLCFq0+gKk3epLZWWWr08ipLHRj9KuVdfHV8wcIEGYixjgeMRZbVLorD04OKWbVrsqPF1JNN6F9s/aNPENeQ7K9viYfEJGnVtrOFr+7ExWGUNtzdnu53WnhbwTLsJPK2aNWI2e1+rTJcLiMwtlIBcRALS4WPtk6qlhpvrIwk7J5fj1tqSVErNowdsquAQ97HkklxJmCRSBytcCAzdqEX4jqrU4RgrN2admuCzs73TzTWfLwI1K+gc2u2GsO6HkSAzNkLSQ4AloEOLG+TXGDIVSE4Xvdrxaz989fI7aZIZh61V5c8CWyJOTLk7+i4FgEmTTpGZ4k9FqUpRxFOr1mbsnfhZeWTvpueZBLsONjBuDc6kxlUjMC0uIOcEtgyMwAAJExEBZbrdu0e5cuWRPbK5m2nRwtExDBut5nKwQ1o+QA69VoUdqpTt/KT9Fm/N5EUspckVmHpmtUzkRoAOQGi+lw9Lq6aiZ1SW1Js7fY+DygKY4OgptgIDJAEAQBAEAQBAeEICJi8MCEByW2tl62QHFbQwDfDUZmZMkcRfxN5G0HmFn47CSqLrKWU168n9i7gsbPDy7LyZ1fZ4saAARlIAbGnwXzfRtZU8U1Vybus+N1kWsReotrXeW9aiQ05etvPX9fRa+IoSjSfVc7rjfX889N5XpzTl2iHtOoG05c8NcYIBvxuY42m3VV5UespxnUi5N5qK+/nfckdqWy2k7cypxNWk4kta95NxNmgzPmeQ6WUz6EjNt3cb7tbe9zj+tcckrmNHD1HCBDW8miArlDojDUtVtPnn6aENTF1Jcu4nYXYc6haSioqyK7d9Szp7EEaL08I+L2J0QHM7W7PEkOYXMe3wvaSCOluChq0I1FZk1Os4dxAbtvF4a1aiKzR7bd10dYBH/AGjzWLW6IhnZW9V5F2GIUt5a4ft9hCAKjKwOl2tMDzDv3C6jhYuCVVKTWV99t3jzPGpJ3ib29sMAWu+1cJ0mnUt7gdVXfRsOrnFPW2zrlbz1Otqd07d5Ff2zwrdHPd5MI/8AaFRh0biE75LxJXJMif8AFVSrbD4Ynk55sPNo/wBSv0OiI3vPP0X59iKdXZ32JOE2XVqv7yu81H+5rejGiwW9ToRi9reUZ1bqy0Ou2VsuIspyE6XDUYCAkoAgCAIAgCAIAgCA8IQEHG4UOCA5HbGypmyApsLTfRzACQbgcj+ix+kOiIYqamnsvflr+y1QxTpqzVyWyriHiM5aOQ/XVXMNg40I7O05d5HUrObvaxvw2xSbmSet1cWRCXGF2KBwQFrQ2aBwQE2nhQEBuFIIDGpQBQEDE7OB4ICrxGxQeCAqsV2VpP8AFTafQT71y4ReqOlOS0ZBPYfD/wB0Pe79Vz1MOB310+JtodjqLdKTfUT816qUFuPHVm95b4XYYHBdkZb4XZoHBAWVKgAgN4QBAEAQBAEAQBAEAQBAeOEoCFicIHICtfsoE6IDfQ2YBwQE6lhAEBIbSAQGcIAgCAIDyEBiaYQGJoBAefw4QD+HCAyFIIDMBAeoAgCAIAgCAIAgCAIAgCAIAgPMqAQgPUAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB//2Q==',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    id: '008',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://cdn2.webdamdb.com/md_IRLcaRTbLgZ1.png?1517915165',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    id: '009',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://cdn2.webdamdb.com/md_IRLcaRTbLgZ1.png?1517915165',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 100,
    discount: 40,
  },
];

export const banners = [
  {
    src:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    alt: 'product image',
  },
  {
    src:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=989&q=80',
    alt: 'product image',
  },
  {
    src:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    alt: 'product image',
  },
  {
    src:
      'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
    alt: 'product image',
  },
];
