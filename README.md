# micro-svarinn

Set env `SVARINN_URL` and `FILTER_STRING`

# API

| Method | Path | Description |
| --- | --- | --- |
| GET | / | This readme |
| GET | /tjenester/svarinn/mottaker/hentNyeForsendelser | Return P360 results |
| GET | /tjenester/svarinn/mottaker/hentNyeForsendelser/true | Return signeringsoppdrag  |
| GET | /tjenester/svarinn/forsendelse/:id |  |
| POST | /tjenester/svarinn/kvitterMottak/forsendelse/:id |  |
| POST | /tjenester/svarinn/mottakFeilet/forsendelse/{forsendelseid} |  |


## License

[MIT](LICENSE)
