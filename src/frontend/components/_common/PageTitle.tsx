import React, { ReactElement } from 'react'
import { makeStyles } from '@mui/styles'

import Head from 'next/head'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  }
}))

const PageTitle = ({
  title,
  buttonTitle,
  buttonOnClick
}: {
  title: string
  buttonTitle?: string
  buttonOnClick?: VoidFunction
}): ReactElement => {
  const classes = useStyles({})

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {buttonTitle && (
        <Button className={classes.root} variant={'outlined'} onClick={buttonOnClick}>
          {buttonTitle}
        </Button>
      )}
      <Typography variant={'h4'} gutterBottom className={classes.root}>
        {title}
      </Typography>
    </>
  )
}

export default PageTitle
