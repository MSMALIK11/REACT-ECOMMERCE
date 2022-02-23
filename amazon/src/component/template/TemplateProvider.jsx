import { createContext } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core";
const TemplateContext=createContext(null)


export const TemplateProvider=({children})=>{
    const theme = createTheme({
overrides:{
    MuiDialog:{
        paperWidthSm:{
            maxWidth:"unset"
        }
    },
    MuiDialogContent:{
        root:{
            padding:0,
            '&:first-child':{
                paddingTop:0,
                paddingLeft:0,
            
                paddingRight:0

            }
        }
    },
    MuiContainer:{
        root :{
            paddingTop:0,
            paddingLeft:0,
         
            paddingRight:0

        }
    },
    makeStyles:{
        root:{
            paddingTop:0

        }
    }

}
      });

      return(
          <TemplateContext.Provider>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
{children}
              </ThemeProvider>
          </TemplateContext.Provider>

      )
}
