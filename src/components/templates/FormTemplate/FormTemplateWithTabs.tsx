import { ReactNode } from 'react';

import { FormTemplate } from '../../templates/FormTemplate/FormTemplate';
import { MainTabs } from '../../logicalcomp/MainTabs';

interface IFormTemplate {
  children: ReactNode;
  activeTabUrl: string;
}

export const FormTemplateWithTabs = ({ children, activeTabUrl }: IFormTemplate) => {
  return (
    <FormTemplate>
      <MainTabs activeTabUrl={activeTabUrl}></MainTabs>
      {children}
    </FormTemplate>
  );
};
