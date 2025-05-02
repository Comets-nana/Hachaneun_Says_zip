import React from "react";

const says = [
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjQg/MDAxNjg1Mjc2NTU5NzY4.NbrPVfL-3I5_dsy7ODZP2xZf8RSWnzZVygH7iH5d_jsg.G9sy9WVy9Lf5ticFSfN6zrY_GRcQldJ3HL2MbMjxSSEg.JPEG.newautumn18/IMG_7440.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMyAg/MDAxNjg1Mjc2NTYwODQ5.01vO9c5F4yIW5mna2DhOFtI8K2mPN1YammtIEcnv9Zog.9fs3u_7GurgX6B6DQHFIdrfjNZb4_9KxYjItcTFnSTMg.JPEG.newautumn18/IMG_7444.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjAx/MDAxNjg1Mjc2NTYwMTEz.DWOdCLzsgwNSXXZ8XOFYB6SY-Dw2ou8gcmz9fRQNCLcg.ToYGkjz8SoCg7nkeKKR4zSmCV86-ckybHOFW5ut-MN0g.JPEG.newautumn18/IMG_7448.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMzMg/MDAxNjg1Mjc2NTU5NzQ0.b5XfQHADHPD2XXxQxmTYx_S6bhbIDJYBE95ZzkJdLYcg.JMf8o9XG4e3TEYsI4juHhDxgfKesBgT0PlhuHJ30QZwg.JPEG.newautumn18/IMG_7439.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMzkg/MDAxNjg1Mjc2NTU5ODc1.yBCr3U1Q0XukBsc6eLd8N_dDoge0vX3dQAni6VhS5UUg.VBoW9-H0Fd2TAaTcmVs16bcoYkjdyv8PM9zQbWfEwBog.JPEG.newautumn18/IMG_7442.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjkw/MDAxNjg1Mjc2NTYwMzY0.M-eLhd3GwXcCKZKAtBvQ89kubZaEfWLdSpBmGowprrYg.10_OzJrqTlfz8fnS42F-l4_1AzkMon8gN6n0H1xnOIEg.JPEG.newautumn18/IMG_7438.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjE3/MDAxNjg1Mjc2NTU5Nzgx.0AB5RwCK15tCN9MANd0ud0o4vth_399hnkrTu8SBQFEg.jqefbKpymiFu_UfjD47rQHE9ZoXUM3sNUDjAgKBAKjMg.JPEG.newautumn18/IMG_7449.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjU3/MDAxNjg1Mjc2NTU5NzQ4.bkzhgTQYnuOhU5J6OImK1j8OXmLdjgTldzEjg1M-OvAg.UP8lUwhfoIByN8Jp2sX_xszJD6SKnAOlRBhJ0JeXAgMg.JPEG.newautumn18/IMG_7446.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjA5/MDAxNjg1Mjc2NTYxNzAw.kOEI3Upz6_HMylIGxS0ZEQ2dRw5dJ7ijKdujC3q1GYkg.sSnOvW0S2CPpoZLX-33mXbr1NFEDLOTZwpwqPcsen7wg.JPEG.newautumn18/IMG_7427.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjQ4/MDAxNjg1Mjc2NTYwMjM1.8ULoInjurq5JAXGpLrm4sGVtEuTXAdXGfqJlROet-IMg.eWK7-NBopEIn0csXhoH-JF4CMLO82-6xkLFE79CtGm0g.JPEG.newautumn18/IMG_7453.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjg2/MDAxNjg1Mjc2NTYwMzE3.2waethdDactUP0drvNIkpEAuZtdy701Iv7vr05UNz9kg.chGYBrReiv8dcezbGoJsNZDfzb3so3n8thsXizlu0mYg.JPEG.newautumn18/IMG_7452.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTI0/MDAxNjg1Mjc2NTYxMzQ5.4bhNz0A8VwjhXdlyt65ABanzDgD3FiABdn4YbAtr3Ekg.vnbYo7ae2MGIEKfnN0INKlw5WJD8fwSViBIGJVvNiiQg.JPEG.newautumn18/IMG_7437.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTc3/MDAxNjg1Mjc2NTYwNTgz.wJGpZTqcE8Fzbtlj7A2jQIbmDT7Fgtcdedj7Nu2dloog.IOV_pIH8dpyCWnADWrmiosxiXFraNhtQJ55DhmPFZJUg.JPEG.newautumn18/IMG_7441.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTk4/MDAxNjg1Mjc2NTYwNzU5.sKbmysaZPX3AR8h5JkVW55JGQUpIuevJcaYNRp-OW1sg.Hq-znMcZdn3JWGcmsmd3-xMbBape8mRN_lJagjysvjUg.JPEG.newautumn18/IMG_7435.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTQ0/MDAxNjg1Mjc2NTYwMzM5.RCtfpEMccEDbaBFOzaFfShtQVd7qzBbZvuOKEAvZsoEg.GV5HDAkfm4Y0-o5_kC8lXL4RYW9hxIGsHsl-q3slSDQg.JPEG.newautumn18/IMG_7436.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTIg/MDAxNjg1Mjc2NTYxMzI2.3_LrUp8ohXfVL6vmNpbXyInqZjBev41EL-gjDVXCTYEg.Ao0tqGQExVfsiKSAUPpy8kOR__tI4w686WES04W4tYog.JPEG.newautumn18/IMG_7434.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjg5/MDAxNjg1Mjc2NTYxMjA0.91CNgc15cFstfpx_YjXtEEXB4_hX3vrxaKtt1xOUX5sg.ErHlXpLThtW2X8iGCZERNZqPmWmjvXv7MqFAApVm4nEg.JPEG.newautumn18/IMG_7432.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfNzIg/MDAxNjg1Mjc2NTYwOTAz.72YkabcqCHgObGT1MF4PVOvcwpwN_2Pz-oN2IBGrPjYg.kix4QubeFl6oyhXWZrk7U09ZKcyeou7BQnyzWy_F6T4g.JPEG.newautumn18/IMG_7431.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTEw/MDAxNjg1Mjc2NTYwNjU0.uFQP1yBQ4RFpBLaAKaU44ebieIKHTTvTXgFwttBe3LYg.cLDaFqZaEH8IwUj8e2a35m2PWIs-OB1-1eiDWgLQ0Zwg.JPEG.newautumn18/IMG_7430.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTEx/MDAxNjg1Mjc2NTYxMDUz.LwobUZEQPLzbBYO7Ve9klegTCP-gRFi-Oj29rwCxHz8g.D6zSPlNxnV3tpsk5-hgBqaVBCm2uM2V-QCeZcVOW0RUg.JPEG.newautumn18/IMG_7429.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjU5/MDAxNjg1Mjc2Nzg4NDAx.qLFHWvm-UqX2t0R8GZ-KsFDz6VnmwtUZ6IjSjO5abHYg.86psrH7X9vEG93nd9D0rJtAbtQjBp43TJp_7MSNdkfQg.JPEG.newautumn18/IMG_7461.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfODcg/MDAxNjg1Mjc2Nzg4MzY4.Uhijy-j2LAbrQVoTuDSc1WnjT8dJIn8oRs62M6Ds6oAg.uW-_D9WI9oE034uHTa3mQMh0YF_9JYOG3BC9dRfnyk8g.JPEG.newautumn18/IMG_7460.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjM4/MDAxNjg1Mjc2Nzg4NzIy.rNrFQWrR9aEwE-UGEXq3VvYZm8jmepHmlawNrPVHbpkg.0TmDvGSOUBj2jPJyzNMgQTP6NiY_C14KZugaXVhNtZMg.JPEG.newautumn18/IMG_7459.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTc5/MDAxNjg1Mjc3MTE2Mzk1.14bfPOZtujOYUF7rE-FsCGZ9Scpf-i3jacsaC1FVI-0g.ghuJd9nBIb2HF09p2O4F7jVm9tjFeepVz34tyU9JrLog.JPEG.newautumn18/IMG_7466.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMjY2/MDAxNjg1Mjc3MTE2MzA3.WmR_7wqYtEa9xWqie2P0w2UzaGFxtIjYsYupVbvnGQwg.P5M2IZe_-tZuvR6DQSVaKr1YUWjjB6NeywkTMpOTGsQg.JPEG.newautumn18/IMG_7464.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfMTIg/MDAxNjg1Mjc3MTE2NDEx.O6nls1JJ9cH3xZ5DabQSTRD1Ev6VEujtgACQU99mRN8g.6E_epCCB3JnKuvAOZHwqF5kEO4V6ZeYgYHlVuvcq2V4g.JPEG.newautumn18/IMG_7463.JPG?type=w966",
    "https://postfiles.pstatic.net/MjAyMzA1MjhfNjMg/MDAxNjg1Mjc3MTE2Mzg3.Kxy0743WYHsw4mtxQPIdh0kNJut6YDx0JeFAPdv11xog.cgIsvGbuLkO0VEB1WCW5--HCWBdvR8i4KIDydhlI-gUg.JPEG.newautumn18/IMG_7465.JPG?type=w966",
];

export default says;