import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import * as S from './styles';

interface DatePickerProps {
  label: string;
  onDateChange: (date: Date) => void;
  initialDate?: Date;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  label,
  onDateChange,
  initialDate,
}) => {
  const [date, setDate] = useState(initialDate || new Date());
  const [open, setOpen] = useState(false);

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    onDateChange(selectedDate);
    setOpen(false);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Box>
        <S.SelectButton onPress={() => setOpen(true)}>
          <S.ButtonText>Selecionar Data</S.ButtonText>
        </S.SelectButton>
        <S.SelectedDate>
          Data selecionada: {date.toLocaleDateString()}
        </S.SelectedDate>
      </S.Box>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
        mode="date"
      />
    </S.Container>
  );
};

export default CustomDatePicker;
